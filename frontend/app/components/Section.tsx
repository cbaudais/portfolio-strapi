type Props = {
  children: React.ReactElement<any>;
  outerDivClass?: string;
  innerDivClass?: string;
}

export const Section = ({ children, outerDivClass, innerDivClass }: Props) => {
  return (
    <>
      <div className={`py-16 ${outerDivClass || ''}`}>
        <div className={`w-11/12 mx-auto ${innerDivClass || ''}`}>
          {children}
        </div>
      </div>
    </>
  )
}