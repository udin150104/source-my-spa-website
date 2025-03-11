import logo from './../../../public/images/logo.svg';
import home from './../../../public/images/home.svg';
import info from './../../../public/images/info.svg';
import identification from './../../../public/images/identification.svg';
import bookOpen from './../../../public/images/bookOpen.svg';

const getRouteSegment = (pass) =>  {
  const path = window.location.pathname; // Ambil path saat ini
  // const segments = path.split('/').filter(Boolean); // Pecah path dan hapus segment kosong
  
  const segments = window.location.hash.slice(1).split('/').filter(Boolean); 
  // console.log(initialHashPath)
  if(segments[0] === pass){
    return 'active';
  }
  return '';
}

const PageTemplate = (data) => `
  <nav class="sidebar">
    <img src="${logo}" class="logo" alt="image svg" />
    <ul class="content">
      <li>
        <a href="/" data-link> 
          <img src="${home}" class="ico" alt="ico Home - Home" />
        </a>
      </li>
      <li>
        <a href="/about" data-link class="${getRouteSegment('about')}"> 
          <img src="${logo}" class="ico" alt="ico profile - About me" />
          Tentang Saya 
        </a>
      </li>
      <li>
        <a href="/portofolio" data-link class="${getRouteSegment('portofolio')}"> 
          <img src="${identification}" class="ico" alt="ico identification - Portofolio" />
          Portofolio 
        </a>
      </li>
      <li>
        <a href="/blogs" data-link class="${getRouteSegment('blogs')}"> 
          <img src="${bookOpen}" class="ico" alt="ico book open - Blogs" />
          Blogs 
        </a>
      </li>
      <li>
        <a href="/informasi" data-link class="${getRouteSegment('informasi')}"> 
          <img src="${info}" class="ico" alt="ico info - Informasi" />
          Info 
        </a>
      </li>
    </ul>
  </nav>
  <main>
    {{content}}
  </main>
`;

export default PageTemplate;