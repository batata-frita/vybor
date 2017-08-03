const выбор = (...args) => {
  if (args.length > 0) {
    if (args[0] === true) {
      return args[1]
    }

    return выбор(...args.slice(2))
  }
}

export default выбор
