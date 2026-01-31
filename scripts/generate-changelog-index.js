#!/usr/bin/env node
/**
 * Auto-generate changelog/index.md from monthly changelog files
 * Run before build: npm run docs:build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const changelogDir = path.join(__dirname, '../changelog');

// Parse a monthly changelog file and extract entries
function parseChangelogFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const entries = [];

  // Match ## headings with dates
  const dateRegex = /^## (.*?\d{4})$/gm;
  const lines = content.split('\n');

  let currentDate = null;
  let currentTitle = null;
  let currentDescription = '';

  for (const line of lines) {
    // Match date headers like "## January 31, 2026"
    const dateMatch = line.match(/^## (.+\d{4})$/);
    if (dateMatch) {
      // Save previous entry
      if (currentDate && currentTitle) {
        entries.push({
          date: currentDate,
          title: currentTitle,
          description: currentDescription.trim(),
        });
      }
      currentDate = dateMatch[1];
      currentTitle = null;
      currentDescription = '';
      continue;
    }

    // Match title headers like "### 📱 Smart Receipt Scanning"
    const titleMatch = line.match(/^### (.+)$/);
    if (titleMatch && currentDate) {
      // Save previous entry if we're on a new title
      if (currentTitle) {
        entries.push({
          date: currentDate,
          title: currentTitle,
          description: currentDescription.trim(),
        });
        currentDescription = '';
      }
      currentTitle = titleMatch[1];
      continue;
    }

    // Capture first paragraph as description
    if (currentDate && currentTitle && !currentDescription && line.trim() && !line.startsWith('#') && !line.startsWith('-') && !line.startsWith('*')) {
      currentDescription = line.trim();
    }
  }

  // Don't forget the last entry
  if (currentDate && currentTitle) {
    entries.push({
      date: currentDate,
      title: currentTitle,
      description: currentDescription.trim(),
    });
  }

  return entries;
}

// Generate anchor from date (e.g., "January 31, 2026" -> "january-31-2026")
function dateToAnchor(date) {
  return date.toLowerCase().replace(/[,\s]+/g, '-').replace(/--+/g, '-');
}

// Get month file from date (e.g., "January 31, 2026" -> "2026-01")
function dateToMonthFile(date) {
  const months = {
    'january': '01', 'february': '02', 'march': '03', 'april': '04',
    'may': '05', 'june': '06', 'july': '07', 'august': '08',
    'september': '09', 'october': '10', 'november': '11', 'december': '12'
  };

  const match = date.match(/(\w+)\s+\d+,?\s+(\d{4})/i);
  if (match) {
    const month = months[match[1].toLowerCase()];
    const year = match[2];
    return `${year}-${month}`;
  }
  return null;
}

// Clean title (remove emoji for cleaner index)
function cleanTitle(title) {
  return title.replace(/^[^\w\s]+\s*/, '').trim();
}

// Main
function main() {
  console.log('📝 Generating changelog index...');

  // Find all monthly changelog files
  const files = fs.readdirSync(changelogDir)
    .filter(f => /^\d{4}-\d{2}\.md$/.test(f))
    .sort()
    .reverse(); // Most recent first

  if (files.length === 0) {
    console.log('No changelog files found');
    return;
  }

  // Collect all entries from all files
  const allEntries = [];
  for (const file of files) {
    const filePath = path.join(changelogDir, file);
    const entries = parseChangelogFile(filePath);
    allEntries.push(...entries);
  }

  // Sort by date (most recent first)
  // Parse dates for sorting
  allEntries.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  // Group entries by month
  const byMonth = {};
  for (const entry of allEntries) {
    const monthFile = dateToMonthFile(entry.date);
    if (!monthFile) continue;

    const monthName = entry.date.match(/(\w+)\s+\d+,?\s+\d{4}/i)?.[1] || 'Unknown';
    const year = entry.date.match(/\d{4}/)?.[0] || '';
    const monthKey = `${monthName} ${year}`;

    if (!byMonth[monthKey]) {
      byMonth[monthKey] = { file: monthFile, entries: [] };
    }
    byMonth[monthKey].entries.push(entry);
  }

  // Generate index content
  let content = `# Changelog

What we've been building. Updated as we ship.

---

`;

  for (const [monthName, data] of Object.entries(byMonth)) {
    content += `## ${monthName}\n\n`;

    for (const entry of data.entries) {
      const anchor = dateToAnchor(entry.date);
      const title = cleanTitle(entry.title);
      content += `### [${entry.date} — ${title}](/changelog/${data.file}#${anchor})\n`;
      content += `${entry.description}\n\n`;
    }

    content += `---\n\n`;
  }

  content += `## Quick Links

- [Roadmap](/roadmap) — What's coming next
- [Vision](/vision) — Why we're building Luma
`;

  // Write index file
  const indexPath = path.join(changelogDir, 'index.md');
  fs.writeFileSync(indexPath, content);

  console.log(`✅ Generated changelog index with ${allEntries.length} entries`);
}

main();
