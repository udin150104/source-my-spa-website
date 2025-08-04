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
    <div id="footer" class="p-3">
      <div class="image-flag">
        <a href="https://info.flagcounter.com/1uJ5"><img src="https://s05.flagcounter.com/map/1uJ5/size_l/txt_000000/border_FFFFFF/pageviews_1/viewers_0/flags_0/" alt="Flag Counter" border="0"></a>
      </div>
    </div>
  </main>
`;

export default PageTemplate;