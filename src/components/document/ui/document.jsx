/**
 *
 * @param title{string} - string used for <title>
 * @param children{JSX.Element} - children nodes
 * @returns {JSX.Element}
 */
export const Document = ({
  title,
  children
}) => {
  return (
     <html lang="ru">
     <head>
       <meta charSet="utf-8"/>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <title>{title}</title>
     </head>
     <body>
      {children}
     </body>
     </html>
  )
}
