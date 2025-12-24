interface Color {
  color: 'green' | 'pink'
  position: 'horizontal' | 'vertical'
}

export function SimpleUnderline({ color, position }: Color) {
  if (color === 'green' && position === 'vertical') {
    return <div className="w-1.75 h-7.75 bg-ring"></div>
  }

  if (color === 'pink' && position === 'horizontal') {
    return <div className="w-12.25 h-1.75 bg-pink"></div>
  }

  if (color === 'green' && position === 'horizontal') {
    return <div className="w-5.5 h-1 bg-ring"></div>
  }
}
