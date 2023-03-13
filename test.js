scrape({
  urls: ['https://www.lowes.com'],
  directory: '/root/lowes',
  subdirectories: [
    {directory: 'img', extensions: ['.jpg', '.png', '.svg']},
    {directory: 'js', extensions: ['.js']},
    {directory: 'css', extensions: ['.css']}
  ]
});
