import Toast from './index'

import { buttonList } from '../../constants/defaultSettings'

export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    position: {
      type: 'string',
      description: 'Toast position',
      defaultValue: 'Error',
      options: [
        'top-right',
        'bottom-right',
        'top-left',
        'bottom-left',
      ],
      control: { type: 'select' },
    },
    animation: {
      type: 'string',
      description: 'Toast animation',
      defaultValue: 'Error',
      options: ['transition', 'opasity'],
      control: { type: 'select' },
    },
    indent: {
      type: 'object',
      description: 'Toast indent',
      firstIndent: {
        type: 'number',
        description: 'Indent Y',
        defaultValue: 12,
        control: { type: 'number' },
      },
      secondIndent: {
        type: 'number',
        description: 'Indent X',
        defaultValue: 12,
        control: { type: 'number' },
      },
    },
  },
}

const Template = (args) => <Toast {...args} />

export const ErrorToast = Template.bind({})
ErrorToast.args = {
  ...ErrorToast.args,
  toastList: [
    {
      ...buttonList[0],
      position: 'top-right',
      delay: 2000,
      animation: 'transition',
      firstIndent: '12',
      secondIndent: '12',
      toastCount: 3,
    },
  ],
  position: 'top-right',
  animation: 'transition',
  indent: { firstIndent: '12', secondIndent: '12' },
  isAutoClean: false,
}
