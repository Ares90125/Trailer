/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        whiteColor:'#FFFFFF',
        mainColor:'#3981F6',
        headColor:'#101828',
        subHeadColor:'#667085',
        titleColor:'#3E5F58',
        textColor:'#344054',
        contentColor:'#6B7280',
        titleBgColor:'#F3F7F6',
        editBgColor:'#3E5F58',
        previewBgColor:'rgba(62, 95, 88, 0.05)',
        slashColor:'#D0D5DD',
        borderColor:'#EAECF0'
      },
      fontSize:{
        headSize:'30px',
        mediumSize:'16px',
        normalSize:'14px'
      },
      boxShadow:{
        dropshadow:'0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)'
      }
    },
  },
  plugins: [],   
}
