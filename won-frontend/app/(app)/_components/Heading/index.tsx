import WritingText from '../WritingText'

export interface HeadingProps {
  text: string
  color: 'white' | 'black'
  decorate?: {
    color: 'primary' | 'secondary'
    orientation: 'vertical' | 'horizontal'
  }
  size?: 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'huge'
  sidebar?: boolean
}
// 18px, 24px, 26px, 28px,

const sizeMap = {
  large: 'text-large',
  xlarge: 'text-xlarge',
  xxlarge: 'text-xxlarge',
  xxxlarge: 'text-xxxlarge',
  huge: 'text-huge'
}

export function Heading({
  text,
  color,
  decorate,
  size = 'large',
  sidebar = false
}: HeadingProps) {
  if (size === 'huge') {
    return (
      <WritingText
        text={text}
        className={`
          text-white
          font-family-poppins
          font-bold
          text-huge
          leading-[120%]
          align-middle
          tracking-[-0.025em]
        `}
      />
    )
  }
  if (decorate?.orientation === 'vertical') {
    if (decorate.color === 'secondary') {
      if (color === 'white') {
        return (
          <div className="flex items-center gap-2.75">
            <div className="w-1.75 h-7.75 bg-secondary"></div>
            <h2 className={`text-white ${sizeMap[size]} font-semibold`}>
              {text}
            </h2>
          </div>
        )
      } else {
        return (
          <div className="flex items-center gap-2.75">
            <div className="w-1.75 h-7.75 bg-secondary"></div>
            <h2 className={`text-black ${sizeMap[size]} font-semibold`}>
              {text}
            </h2>
          </div>
        )
      }
    } else {
      if (color === 'white') {
        return (
          <div className="flex items-center gap-2.75">
            <div className="w-1.75 h-7.75 bg-primary"></div>
            <h2 className={`text-white ${sizeMap[size]} font-semibold`}>
              {text}
            </h2>
          </div>
        )
      } else {
        return (
          <div className="flex items-center gap-2.75">
            <div className="w-1.75 h-7.75 bg-primary"></div>
            <h2 className={`text-black ${sizeMap[size]} font-semibold`}>
              {text}
            </h2>
          </div>
        )
      }
    }
  } else {
    if (color === 'white') {
      return (
        <div className={`flex flex-col ${sidebar ? '' : 'gap-2.75'}`}>
          <h2
            className={`text-white ${sidebar ? 'font-medium text-xlarge' : `font-semibold ${sizeMap[size]}`}`}
          >
            {text}
          </h2>
          <div
            className={`${
              decorate?.color === 'primary' ? 'bg-primary' : 'bg-secondary'
            } ${sidebar ? 'w-6.5' : 'w-12.25'} h-1.5`}
          ></div>
        </div>
      )
    } else {
      return (
        <div className="flex flex-col gap-0.75">
          <h2
            className={`text-black ${sidebar ? 'font-medium text-xlarge' : `font-semibold ${sizeMap[size]}`}`}
          >
            {text}
          </h2>
          <div
            className={`${
              decorate?.color === 'primary' ? 'bg-primary' : 'bg-secondary'
            } w-12.25 h-1.25`}
          ></div>
        </div>
      )
    }
  }
}
