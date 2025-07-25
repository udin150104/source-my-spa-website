const getRouteSegment = (pass) =>  {
  // const path = window.location.pathname; // Ambil path saat ini
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
    <img src="/images/logo.svg" class="logo" alt="image svg" />
    <ul class="content">
      <li>
        <a href="/" data-link> 
          <img src="/images/home.svg" class="ico" alt="ico Home - Home" />
        </a>
      </li>
      <li>
        <a href="/about" data-link class="${getRouteSegment('about')}"> 
          <img src="/images/logo.svg" class="ico" alt="ico profile - About me" />
          Tentang Saya 
        </a>
      </li>
      <li>
        <a href="/portofolio" data-link class="${getRouteSegment('portofolio')}"> 
          <img src="/images/identification.svg" class="ico" alt="ico identification - Portofolio" />
          Portofolio 
        </a>
      </li>
      <li>
        <a href="/blogs" data-link class="${getRouteSegment('blogs')}"> 
          <img src="/images/bookOpen.svg" class="ico" alt="ico book open - Blogs" />
          Blogs 
        </a>
      </li>
    </ul>
  </nav>
  <main>
    {{content}}
  </main>
`;

export default PageTemplate;