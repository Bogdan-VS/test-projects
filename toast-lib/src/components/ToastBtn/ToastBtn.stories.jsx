import ToastBtn from './index'

export default {
  title: 'ToastBtn',
  component: ToastBtn,
  argTypes: {
    name: {
      type: 'string',
      description: 'Toast type',
      defaultValue: 'Error',
      options: ['Error', 'Success', 'Warning', 'Info'],
      control: { type: 'select' },
    },
    color: {
      type: 'string',
      description: 'Toast color',
      defaultValue: '#ed143d',
      options: ['#ed143d', '#4ba256', '#de954b', '#3eabc6'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) => <ToastBtn {...args} />

export const Error = Template.bind({})
Error.args = {
  name: 'Error',
  color: '#ed143d',
}

export const Success = Template.bind({})
Success.args = {
  name: 'Success',
  color: '#4ba256',
}

export const Warning = Template.bind({})
Warning.args = {
  name: 'Warning',
  color: '#de954b',
}

export const Info = Template.bind({})
Info.args = {
  name: 'Info',
  color: '#3eabc6',
}
