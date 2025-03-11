import Template from "../core/Template";
import DefaultTemplate from "./templates/DefaultTemplate";

class NotFound {
  render() {
    document.title = '404 | Page Not Found!';
    const data = {
      title: '404',
      content: `
        <div id="home-container">
            <h1>404 Not Found</h1>
            <a href="/" data-link>Home</a>
        </div>
        `,
    };

    return Template.render(DefaultTemplate(), data);
  }

}

export default NotFound;