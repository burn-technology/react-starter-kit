const lodash = require('lodash');

const reducerIndex = 'src/redux/reducers/index.js';
const actionIndex = 'src/redux/actions/index.js';
const isNotEmptyFor = name => {
  return value => {
    if (lodash.isEmpty(value)) return name + ' is required'
    return true
  }
}

module.exports = plop => {
  plop.setGenerator('Components', {
    description: 'Create application component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
      validate: isNotEmptyFor('name')

    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
      templateFile: 'plop-templates/component.js'
    },
    {
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
      templateFile: 'plop-templates/style.scss'
    },
    {
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
      templateFile: 'plop-templates/test.js'
    }]
  }),
  plop.setGenerator('Reducers', {
    description: 'Create simple reducer for App',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your reducers name?',
      validate: isNotEmptyFor('name'),
    }],
    actions: [{
      type: 'add',
      path: 'src/redux/reducers/{{camelCase name}}.js',
      templateFile: 'plop-templates/reducer.js',
    },
    {
      type: 'modify',
      path: reducerIndex,
      pattern: /(\/\/ IMPORT MODULE FILES)/g,
      template: '$1\nimport {{camelCase name}} from "{{camelCase name}}";',
    },
    {
      type: 'modify',
      path: reducerIndex,
      pattern: /(\/\/ EXPORT MODULE FILES)/g,
      template: '$1\n{{camelCase name}},',
    }],
  }),
  plop.setGenerator('Actions', {
    description: 'Create action for a reducer',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your action name?',
      validate: isNotEmptyFor('name')
    }],
    actions: [{
      type: 'modify',
      path: actionIndex,
      pattern: /(\/\/ EXPORT ACTION)/g,
      template: '$1\nexport const {{camelCase name}} = action => ({type: "{{constantCase name}}",});'
    }],
  }),
  plop.setGenerator('Containers', {
    description: 'Create the container of a component',
    prompts:[{
      type: 'input',
      name: 'name',
      message: 'What is your container name',
      validate: isNotEmptyFor('name')
    },
    {
      type: 'input',
      name: 'componentName',
      message: 'What is your component name',
      validate: isNotEmptyFor('componentName')
    }],
    actions: [{
      type: 'add',
      path: 'src/redux/containers/{{pascalCase name}}.js',
      templateFile: 'plop-templates/container.js'
    }],
  })
}
