export const faqs = [
    {
        question: "Is my file uploaded to a server?",
        answer: "No. The entire MD5 calculation is done locally in your browser. Your file never leaves your device.",
    },
    {
        question: "Can I use this tool for large files?",
        answer: "Yes! The tool uses chunked processing to efficiently handle files even larger than 50GB.",
    },
    {
        question: "Why doesn't my file's MD5 match?",
        answer: "Even a tiny change in the file — a single byte — will result in a completely different MD5. Make sure you're verifying the exact original version.",
    },
    {
        question: "Is MD5 secure for checking file integrity?",
        answer: "While MD5 is not secure for encryption or password storage, it's still widely used and perfectly suitable for verifying file integrity.",
    },
    {
        question: "Do I need to install anything?",
        answer: "Nope. This tool works directly in your browser — no downloads, installations, or extensions required.",
    },
];

export const features = [
    {
        title: "Local-Only MD5 Hashing",
        subtitle: "Verify files securely in your browser",
        description: "No servers. No uploads. Your files never leave your device — all hashing is done locally with full privacy.",
        image: '/assets/bgs1.jpg',
    },
    {
        title: "Supports Large Files",
        subtitle: "Chunked hashing up to 50GB+",
        description: "Thanks to efficient chunked processing, you can verify even massive files without crashing your browser.",
        image: '/assets/bgs2.jpg',
    },
    {
        title: "Instant Hash Comparison",
        subtitle: "Quickly validate integrity",
        description: "Paste the original MD5, and instantly check if your file matches — simple and reliable.",
        image: '/assets/bgs1.jpg',
    },
    {
        title: "No Installation Required",
        subtitle: "Runs directly in your browser",
        description: "Open the site and go — no extensions, no apps, just pure functionality from any modern browser.",
        image: '/assets/bgs2.jpg',
    },
    {
        title: "User-Friendly Interface",
        subtitle: "Clean and intuitive design",
        description: "A simple drag-and-drop experience with clear instructions, built for both casual and technical users.",
        image: '/assets/bgs1.jpg',
    },
    {
        title: "Privacy-First Approach",
        subtitle: "No data collection or tracking",
        description: "Your files, your privacy. We don’t store, analyze, or touch any of your data — because we never see it.",
        image: '/assets/bgs2.jpg',
    },
    {
        title: "Open Source Inspired",
        subtitle: "Transparency you can trust",
        description: "Inspired by open-source values. No hidden processes — inspect how it works anytime.",
        image: '/assets/bgs1.jpg',
    },
];
