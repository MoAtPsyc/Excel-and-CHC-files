document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'https://raw.githubusercontent.com/your-username/your-repo-name/main/your-file.xlsx'; // Modify URL below with your actual file path
  link.download = 'myfile.xlsx';  // You can name the file whatever you want
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
