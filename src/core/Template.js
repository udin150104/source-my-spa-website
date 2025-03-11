class Template {
    static render(template, data = {}) {
        // Handle {{#each}} loops
        template = template.replace(/\{\{#each (\w+)\}\}(.*?)\{\{\/each\}\}/gs, (_, key, content) => {
            if (Array.isArray(data[key])) {
                return data[key].map((item) => Template.render(content, { this: item })).join('');
            }
            return '';
        });

        // Handle placeholders like {{key}}
        return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] || '');
    }
}

export default Template;