fetch('scripts/config.json')
  .then(res => res.json())
  .then(data => {
    document.title = data.pageTitle;
  });
