export class Singelton {
  constructor() {
    if (typeof Singelton.instance === 'object') {
      return Singelton.instance
    }

    this.name = ''
    this.position = ''
    this.delay = ''
    this.color = ''
    this.subtitle = ''
    this.animation = ''
    this.firstIndent = ''
    this.secondIndent = ''
    this.toastCount = ''
    this.toasts = []
    this.toastLimit = false
    Singelton.instance = this
    return this
  }

  getData = () => {
    return {
      name: this.name,
      position: this.position,
      delay: this.delay,
      color: this.color,
      subtitle: this.subtitle,
      animation: this.animation,
      firstIndent: this.firstIndent,
      secondIndent: this.secondIndent,
      toastCount: this.toastCount,
    }
  }

  generateToast = (toastOptions) => {
    return toastOptions
  }

  getAllToasts = () => {
    return this.toasts
  }

  addToast = (toast) => {
    if (!this.toastLimit) {
      this.toasts = [...this.toasts, toast]
    } else if (this.toasts.length !== this.toastCount) {
      this.toasts = [...this.toasts, toast]
    } else {
      const currentList = [...this.toasts]
      currentList.shift()

      this.toasts = [...currentList, toast]
    }
  }

  removeToast = (id) => {
    const index = this.toasts.findIndex((el) => el.id === id)
    const currentList = [...this.toasts]
    currentList.splice(index, 1)

    this.toasts = currentList
  }

  changeTitle = (title) => {
    return (this.name = title)
  }

  changeSubtitle = (subtitle) => {
    return (this.subtitle = subtitle)
  }

  changeColor = (color) => {
    return (this.color = color)
  }

  changePosition = (position) => {
    return (this.position = position)
  }

  changeFirstIndent = (indent) => {
    return (this.firstIndent = indent)
  }

  changeSecondIndent = (indent) => {
    return (this.secondIndent = indent)
  }

  changeAnimation = (animation) => {
    return (this.animation = animation)
  }

  changeDelay = (delay) => {
    return (this.delay = delay)
  }

  changeToastCount = (count) => {
    return (this.toastCount = count)
  }

  changeToastLimit = (value) => {
    return (this.toastLimit = value)
  }
}
