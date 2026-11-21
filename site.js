/* EDIT THIS VALUE AFTER YOU CREATE THE BUSINESS EMAIL. Changes require no build step. */
const BUSINESS_EMAIL = "contact@havabytelabs.com";
for(const item of document.querySelectorAll('#year')) item.textContent = new Date().getFullYear();
const link=document.querySelector('#contact-link');
const label=document.querySelector('#contact-email');
if(link && label){if(BUSINESS_EMAIL){link.href='mailto:'+BUSINESS_EMAIL;label.textContent=BUSINESS_EMAIL;}else{link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.style.opacity='.65';link.title='Add your business email to site.js before publishing';}}
