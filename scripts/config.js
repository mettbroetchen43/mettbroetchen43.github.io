// (C) 2025 mettbroetchen43 / Sascha Mester
// All Rights Reserved
// This file is part of https://mettbroetchen43.github.io
// This file is licensed under the AGPL License.
// License text available at https://www.gnu.org/licenses/agpl-3.0.txt

fetch('scripts/config.json')
  .then(res => res.json())
  .then(data => {
    document.title = data.pageTitle;
  });
