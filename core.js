const $ = (id) => document.getElementById(id);
export const html = String.raw;
export const render = (id, html) => $(id).innerHTML = html;