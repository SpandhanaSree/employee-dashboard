import { renderNavbar } from './components/navbar.js';
import {fetchEmployees} from './api.js';
import {state} from './state.js';
import {router} from './router.js';

document.getElementById('navbar').innerHTML=renderNavbar();

state.employees=await fetchEmployees();
await router();

document.addEventListener('click',async e=>{
if(e.target.matches('[data-link]')){
e.preventDefault();
history.pushState({},'',e.target.href);
router();
}
if(e.target.classList.contains('detailsBtn')){
history.pushState({},'',`/employees/${e.target.dataset.id}`);
router();
}
});

window.addEventListener('popstate',router);
