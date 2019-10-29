module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a simple component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}.js',
                templateFile: 'plop-templates/Component.js.hbs',
            },
        ],
    });
};