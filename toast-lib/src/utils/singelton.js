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
}
