const fs = require('fs');
let content = fs.readFileSync('components/compare/CompareTableSection.tsx', 'utf-8');

// Replace grid classes
content = content.replace(/grid-cols-3 lg:grid-cols-\[140px_1fr_1fr_1fr\]/g, 'grid-cols-[80px_1fr_1fr_1fr] md:grid-cols-[120px_1fr_1fr_1fr] lg:grid-cols-[140px_1fr_1fr_1fr]');

// Replace col-span-3
content = content.replace(/col-span-3 lg:col-span-1/g, 'col-span-1');

// Replace borders
content = content.replace(/border-t lg:border-t-0/g, 'border-l border-[#4B3621]/10 lg:border-l-0');

fs.writeFileSync('components/compare/CompareTableSection.tsx', content);
