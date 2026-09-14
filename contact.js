// En GitHub Pages (usuario.github.io/repo/) enlaza a las incidencias del repositorio.
const [user] = location.hostname.split('.');
const repo = location.pathname.split('/')[1];
if (location.hostname.endsWith('github.io') && repo) {
  for (const a of document.querySelectorAll('a.contact')) a.href = `https://github.com/${user}/${repo}/issues`;
}
