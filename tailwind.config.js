module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      minWidth: {
        new_min: '1280px',
        card_min_width: '300px',
        
      },

      boxShadow: {
        new: '0px 6px 0px -3px  inset',
      },

      fontSize: {
        xxs: ".6rem"
      },
      letterSpacing: {
        big: ".3em"
      },

      fontFamily: {
        inter: "Inter, sans-serif",
      },
      colors: {
        dark: {
          toggle_1: "hsl(210, 78%, 56%);",
          toggle_2: "hsl(146, 68%, 55%)",
          blue_bg: "hsl(230, 17%, 14%)",
          blue_top_bg: "hsl(232, 19%, 15%)",
          text_blue: "hsl(228, 34%, 66%)",
          text_white: "hsl(0, 0%, 100%)",
          blue_card: "hsl(228, 28%, 20%)",
        },
        light: {
          toggle: "hsl(230, 22%, 74%)",
          white_bg: "hsl(0, 0%, 100%)",
          blue_top_bg: "hsl(225, 100%, 98%)",
          blue_card: "hsl(227, 47%, 96%)",
          blue_text: "hsl(228, 12%, 44%)",
          verydark_text: "hsl(230, 17%, 14%)",
        },
        primary: {
          green:"hsl(163, 72%, 41%)",
          red: "hsl(356, 69%, 56%)",
          facebook: "hsl(208, 92%, 53%)",
          tw:"hsl(208, 92%, 53%)",
          instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
          yt: "hsl(348, 97%, 39%)",

        },
      },
    },
  },
  plugins: [],
}
