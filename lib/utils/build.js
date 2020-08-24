export default function build (target, input, ops) {
  return ops.reduce((target, op) => op(target, input), target)
}
