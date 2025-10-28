

// // js/lab-member.js
// class LabMember extends HTMLElement {
//   connectedCallback() {
//     const name = this.getAttribute('name');
//     const place = this.getAttribute('place');
//     const email = this.getAttribute('email');
//     const image = this.getAttribute('image');
//     const subject = this.getAttribute('subject');
//
//
//     let imageHTML = '';
//
//     // Use the global baseUrl variable injected in HTML
//     if (image && image !== 'None') {
//       // Ensure the image path is correct relative to the base URL
//       imageHTML = `<img src="/GCO/images/members/${image}" alt="Member ${name}">`;
//     }
//
//     let emailHTML = '';
//     if (email && email !== 'None') {
//       emailHTML = `<div class="box email-box">Correo electrónico: <a href="mailto:${email}">${email}</a></div>`;
//     }
//
//     let subjectHTML = '';
//     if (subject && subject !== 'None') {
//       subjectHTML = `<div class="box subject-box">${subject}</div>`;
//     }
//
//     this.innerHTML = `
//       <li class="lab-member">
//         ${imageHTML}
//         <div class="text-content">
//           <h4 class="box name-box">${name}</h4>
//           <h5 class="box place-box">${place}</h5>
//           ${emailHTML}
//           ${subjectHTML}
//         </div>
//       </li>
//     `;
//   }
// }
//
// customElements.define('lab-member', LabMember);


// js/lab-member.js
class LabMember extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || '';
    const place = this.getAttribute('place') || '';
    const email = this.getAttribute('email') || '';
    const image = this.getAttribute('image') || '';
    const subject = this.getAttribute('subject') || '';

    // Use injected baseUrl (set in the page layout). If empty, prefix becomes ''.
    const base = (typeof window.baseUrl !== 'undefined' && window.baseUrl) ? window.baseUrl : '';
    // Ensure prefix formatting and avoid accidental double slashes:
    const prefix = base.endsWith('/') ? base.slice(0, -1) : base;

    let imageHTML = '';
    if (image && image !== 'None') {
      // Build a path that works whether site.baseurl is '' or '/your-repo'
      const src = `${prefix}/images/members/${image}`.replace(/([^:]\/)\/+/g, '$1');
      imageHTML = `<img src="${src}" alt="Member ${name}">`;
    }

    let emailHTML = '';
    if (email && email !== 'None') {
      emailHTML = `<div class="box email-box">Correo electrónico: <a href="mailto:${email}">${email}</a></div>`;
    }

    let subjectHTML = '';
    if (subject && subject !== 'None') {
      subjectHTML = `<div class="box subject-box">${subject}</div>`;
    }

    // Output a container (not an <li>) so you don't create nested <li> if the element
    // is already wrapped. If you prefer the custom element to be the list item,
    // remove the outer <li> from your markdown.
    this.innerHTML = `
      <div class="lab-member">
        ${imageHTML}
        <div class="text-content">
          <h4 class="box name-box">${name}</h4>
          <h5 class="box place-box">${place}</h5>
          ${emailHTML}
          ${subjectHTML}
        </div>
      </div>
    `;
  }
}

customElements.define('lab-member', LabMember);
