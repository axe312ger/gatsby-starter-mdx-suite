module.exports = {
  "theme": {
    "extend": {
      "borderWidths": {
        "0": "0",
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "px": "1px"
      },
      "breakpoints": [
        "640px",
        "768px",
        "1024px",
        "1280px"
      ],
      "baseColors": {
        "transparent": "transparent",
        "black": "#000",
        "white": "#fff",
        "gray": [
          null,
          "#f7fafc",
          "#edf2f7",
          "#e2e8f0",
          "#cbd5e0",
          "#a0aec0",
          "#718096",
          "#4a5568",
          "#2d3748",
          "#1a202c"
        ],
        "red": [
          null,
          "#fff5f5",
          "#fed7d7",
          "#feb2b2",
          "#fc8181",
          "#f56565",
          "#e53e3e",
          "#c53030",
          "#9b2c2c",
          "#742a2a"
        ],
        "orange": [
          null,
          "#fffaf0",
          "#feebc8",
          "#fbd38d",
          "#f6ad55",
          "#ed8936",
          "#dd6b20",
          "#c05621",
          "#9c4221",
          "#7b341e"
        ],
        "yellow": [
          null,
          "#fffff0",
          "#fefcbf",
          "#faf089",
          "#f6e05e",
          "#ecc94b",
          "#d69e2e",
          "#b7791f",
          "#975a16",
          "#744210"
        ],
        "green": [
          null,
          "#f0fff4",
          "#c6f6d5",
          "#9ae6b4",
          "#68d391",
          "#48bb78",
          "#38a169",
          "#2f855a",
          "#276749",
          "#22543d"
        ],
        "teal": [
          null,
          "#e6fffa",
          "#b2f5ea",
          "#81e6d9",
          "#4fd1c5",
          "#38b2ac",
          "#319795",
          "#2c7a7b",
          "#285e61",
          "#234e52"
        ],
        "blue": [
          null,
          "#ebf8ff",
          "#bee3f8",
          "#90cdf4",
          "#63b3ed",
          "#4299e1",
          "#3182ce",
          "#2b6cb0",
          "#2c5282",
          "#2a4365"
        ],
        "indigo": [
          null,
          "#ebf4ff",
          "#c3dafe",
          "#a3bffa",
          "#7f9cf5",
          "#667eea",
          "#5a67d8",
          "#4c51bf",
          "#434190",
          "#3c366b"
        ],
        "purple": [
          null,
          "#faf5ff",
          "#e9d8fd",
          "#d6bcfa",
          "#b794f4",
          "#9f7aea",
          "#805ad5",
          "#6b46c1",
          "#553c9a",
          "#44337a"
        ],
        "pink": [
          null,
          "#fff5f7",
          "#fed7e2",
          "#fbb6ce",
          "#f687b3",
          "#ed64a6",
          "#d53f8c",
          "#b83280",
          "#97266d",
          "#702459"
        ]
      },
      "buttons": {
        "simple": {
          "py": 2,
          "px": 3,
          "cursor": "pointer",
          "fontSize": "100%",
          "lineHeight": "inherit",
          "backgroundColor": "primary",
          "border": "none",
          "color": "white",
          "fontWeight": "bold",
          "borderRadius": "default",
          "&:hover": {
            "backgroundColor": "primaryHover"
          }
        },
        "pill": {
          "py": 2,
          "px": 3,
          "cursor": "pointer",
          "fontSize": "100%",
          "lineHeight": "inherit",
          "backgroundColor": "primary",
          "border": "none",
          "color": "white",
          "fontWeight": "bold",
          "borderRadius": "full",
          "&:hover": {
            "backgroundColor": "primaryHover"
          }
        },
        "outline": {
          "py": 2,
          "px": 3,
          "cursor": "pointer",
          "fontSize": "100%",
          "lineHeight": "inherit",
          "backgroundColor": "transparent",
          "borderWidth": "1px",
          "borderStyle": "solid",
          "borderColor": "primary",
          "color": "primary",
          "fontWeight": "semibold",
          "borderRadius": "default",
          "&:hover": {
            "backgroundColor": "primary",
            "color": "white",
            "borderColor": "transparent"
          }
        },
        "bordered": {
          "py": 2,
          "px": 3,
          "cursor": "pointer",
          "fontSize": "100%",
          "lineHeight": "inherit",
          "backgroundColor": "primary",
          "borderWidth": "1px",
          "borderStyle": "solid",
          "borderColor": "primaryHover",
          "color": "white",
          "fontWeight": "bold",
          "borderRadius": "default",
          "&:hover": {
            "backgroundColor": "primaryHover"
          }
        },
        "disabled": {
          "py": 2,
          "px": 3,
          "cursor": "not-allowed",
          "fontSize": "100%",
          "lineHeight": "inherit",
          "backgroundColor": "primary",
          "border": "none",
          "opacity": 0.5,
          "color": "white",
          "fontWeight": "bold",
          "borderRadius": "default"
        },
        "3D": {
          "py": 2,
          "px": 3,
          "cursor": "pointer",
          "fontSize": "100%",
          "lineHeight": "inherit",
          "backgroundColor": "primary",
          "border": "none",
          "borderBottomWidth": "4px",
          "borderBottomStyle": "solid",
          "borderBottomColor": "primaryHover",
          "color": "white",
          "fontWeight": "bold",
          "borderRadius": "default",
          "transition": "transform 0.3s ease-in-out",
          "&:hover": {
            "transform": "translateY(-1px)"
          }
        },
        "elevated": {
          "py": 2,
          "px": 3,
          "cursor": "pointer",
          "fontSize": "100%",
          "lineHeight": "inherit",
          "backgroundColor": "white",
          "borderWidth": "1px",
          "borderStyle": "solid",
          "borderColor": "gray.4",
          "color": "text",
          "fontWeight": "bold",
          "borderRadius": "default",
          "boxShadow": "default",
          "&:hover": {
            "backgroundColor": "gray.1"
          }
        }
      },
      "colors": {
        "transparent": "transparent",
        "black": "#000",
        "white": "#fff",
        "gray": {
          "100": "#f7fafc",
          "200": "#edf2f7",
          "300": "#e2e8f0",
          "400": "#cbd5e0",
          "500": "#a0aec0",
          "600": "#718096",
          "700": "#4a5568",
          "800": "#2d3748",
          "900": "#1a202c"
        },
        "red": {
          "100": "#fff5f5",
          "200": "#fed7d7",
          "300": "#feb2b2",
          "400": "#fc8181",
          "500": "#f56565",
          "600": "#e53e3e",
          "700": "#c53030",
          "800": "#9b2c2c",
          "900": "#742a2a"
        },
        "orange": {
          "100": "#fffaf0",
          "200": "#feebc8",
          "300": "#fbd38d",
          "400": "#f6ad55",
          "500": "#ed8936",
          "600": "#dd6b20",
          "700": "#c05621",
          "800": "#9c4221",
          "900": "#7b341e"
        },
        "yellow": {
          "100": "#fffff0",
          "200": "#fefcbf",
          "300": "#faf089",
          "400": "#f6e05e",
          "500": "#ecc94b",
          "600": "#d69e2e",
          "700": "#b7791f",
          "800": "#975a16",
          "900": "#744210"
        },
        "green": {
          "100": "#f0fff4",
          "200": "#c6f6d5",
          "300": "#9ae6b4",
          "400": "#68d391",
          "500": "#48bb78",
          "600": "#38a169",
          "700": "#2f855a",
          "800": "#276749",
          "900": "#22543d"
        },
        "teal": {
          "100": "#e6fffa",
          "200": "#b2f5ea",
          "300": "#81e6d9",
          "400": "#4fd1c5",
          "500": "#38b2ac",
          "600": "#319795",
          "700": "#2c7a7b",
          "800": "#285e61",
          "900": "#234e52"
        },
        "blue": {
          "100": "#ebf8ff",
          "200": "#bee3f8",
          "300": "#90cdf4",
          "400": "#63b3ed",
          "500": "#4299e1",
          "600": "#3182ce",
          "700": "#2b6cb0",
          "800": "#2c5282",
          "900": "#2a4365"
        },
        "indigo": {
          "100": "#ebf4ff",
          "200": "#c3dafe",
          "300": "#a3bffa",
          "400": "#7f9cf5",
          "500": "#667eea",
          "600": "#5a67d8",
          "700": "#4c51bf",
          "800": "#434190",
          "900": "#3c366b"
        },
        "purple": {
          "100": "#faf5ff",
          "200": "#e9d8fd",
          "300": "#d6bcfa",
          "400": "#b794f4",
          "500": "#9f7aea",
          "600": "#805ad5",
          "700": "#6b46c1",
          "800": "#553c9a",
          "900": "#44337a"
        },
        "pink": {
          "100": "#fff5f7",
          "200": "#fed7e2",
          "300": "#fbb6ce",
          "400": "#f687b3",
          "500": "#ed64a6",
          "600": "#d53f8c",
          "700": "#b83280",
          "800": "#97266d",
          "900": "#702459"
        },
        "grayDark": "#2d3748",
        "text": "#2d3748",
        "background": "transparent",
        "primary": "#2b6cb0",
        "primaryHover": "#2c5282",
        "secondary": "#718096",
        "muted": "#e2e8f0",
        "success": "#9ae6b4",
        "info": "#63b3ed",
        "warning": "#faf089",
        "danger": "#feb2b2",
        "light": "#f7fafc",
        "dark": "#2d3748",
        "textMuted": "#718096",
        "headline": "#2d3748",
        "rootBackground": "#fff",
        "sets": {
          "backgroundImage": {
            "background": "transparent",
            "text": "#fff",
            "headline": "#fff"
          },
          "brightBackgroundImage": {
            "text": "#2d3748"
          },
          "primary": {
            "background": "#2b6cb0",
            "text": "#fff",
            "primary": "#fff",
            "secondary": "#2b6cb0",
            "headline": "#fff"
          },
          "red": {
            "background": "#c53030",
            "text": "#fff",
            "headline": "#fed7d7",
            "primary": "#fff5f5",
            "secondary": "#fff"
          },
          "orange": {
            "background": "#c05621",
            "text": "#fff",
            "headline": "#feebc8",
            "primary": "#fffaf0",
            "secondary": "#fff"
          },
          "yellow": {
            "background": "#b7791f",
            "text": "#fff",
            "headline": "#fefcbf",
            "primary": "#fffff0",
            "secondary": "#fff"
          },
          "green": {
            "background": "#2f855a",
            "text": "#fff",
            "headline": "#c6f6d5",
            "primary": "#f0fff4",
            "secondary": "#fff"
          },
          "teal": {
            "background": "#2c7a7b",
            "text": "#fff",
            "headline": "#e6fffa",
            "primary": "#e6fffa",
            "secondary": "#fff"
          },
          "blue": {
            "background": "#2b6cb0",
            "text": "#fff",
            "headline": "#bee3f8",
            "primary": "#ebf8ff",
            "secondary": "#fff"
          },
          "indigo": {
            "background": "#4c51bf",
            "text": "#fff",
            "headline": "#c3dafe",
            "primary": "#ebf4ff",
            "secondary": "#fff"
          },
          "purple": {
            "background": "#6b46c1",
            "text": "#fff",
            "headline": "#e9d8fd",
            "primary": "#faf5ff",
            "secondary": "#fff"
          },
          "pink": {
            "background": "#b83280",
            "text": "#fff",
            "headline": "#fed7e2",
            "primary": "#fff5f7",
            "secondary": "#fff"
          }
        }
      },
      "baseFonts": {
        "sans": "-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
        "serif": "Georgia, Cambria, \"Times New Roman\", Times, serif",
        "mono": "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
      },
      "fontFamily": {
        "sans": "-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
        "serif": "Georgia, Cambria, \"Times New Roman\", Times, serif",
        "mono": "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
        "body": "'georgia', serif",
        "heading": "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        "monospace": "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
      },
      "fontSize": [
        12.99603834169977,
        13.928809012737986,
        16,
        21.112126572366307,
        24.251465064166368,
        32,
        "3rem",
        "4rem",
        "4.5rem"
      ],
      "baseFontWeights": {
        "hairline": "100",
        "thin": "200",
        "light": "300",
        "normal": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700",
        "extrabold": "800",
        "black": "900"
      },
      "fontWeight": {
        "hairline": "100",
        "thin": "200",
        "light": "300",
        "normal": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "bold",
        "extrabold": "800",
        "black": "900",
        "body": "normal",
        "heading": "bold"
      },
      "inputs": {
        "shadow": {
          "py": 2,
          "px": 3,
          "fontSize": "100%",
          "borderRadius": "default",
          "appearance": "none",
          "lineHeight": "tight",
          "border": "none",
          "color": "gray.7",
          "boxShadow": "default",
          "&:focus": {
            "outline": "none",
            "boxShadow": "outline"
          }
        },
        "inline": {
          "py": 2,
          "px": 3,
          "fontSize": "100%",
          "borderRadius": "default",
          "appearance": "none",
          "lineHeight": "tight",
          "backgroundColor": "gray.2",
          "borderWidth": "2px",
          "borderStyle": "solid",
          "borderColor": "gray.2",
          "color": "gray.7",
          "&:focus": {
            "outline": "none",
            "borderColor": "primary",
            "backgroundColor": "white"
          }
        },
        "underline": {
          "py": 2,
          "px": 3,
          "fontSize": "100%",
          "borderRadius": "0px",
          "appearance": "none",
          "lineHeight": "tight",
          "backgroundColor": "transparent",
          "border": "none",
          "borderBottomWidth": "2px",
          "borderBottomStyle": "solid",
          "borderBottomColor": "primary",
          "color": "gray.7",
          "&:focus": {
            "outline": "none",
            "borderColor": "primary",
            "backgroundColor": "white"
          }
        }
      },
      "letterSpacing": {
        "tighter": "-0.05em",
        "tight": "-0.025em",
        "normal": "0",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em"
      },
      "baseLineHeights": {
        "none": "1",
        "tight": "1.25",
        "snug": "1.375",
        "normal": "1.5",
        "relaxed": "1.625",
        "loose": "2"
      },
      "lineHeight": {
        "none": "1",
        "tight": "1.25",
        "snug": "1.375",
        "normal": "1.5",
        "relaxed": "1.625",
        "loose": "2",
        "body": 1.45,
        "heading": 1.1
      },
      "borderRadius": {
        "none": "0",
        "sm": "0.125rem",
        "default": "0.25rem",
        "lg": "0.5rem",
        "full": "9999px"
      },
      "sizes": {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
        "px": "1px",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "full": "100%",
        "screenHeight": "100vh",
        "screenWidth": "100vw",
        "contentColumnPadding": "2vw",
        "gridGap": "1rem",
        "contentGap": "1rem",
        "contentColumn": "1200px"
      },
      "boxShadow": {
        "default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        "outline": "0 0 0 3px rgba(66, 153, 225, 0.5)",
        "none": "none"
      },
      "spacing": {
        "content-column-padding": "2vw",
        "grid-gap": "1rem",
        "content-gap": "1rem",
        "content-column": "1200px"
      },
      "zIndex": {
        "0": "0",
        "10": "10",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "auto": "auto"
      },
      "tailwind": {
        "borderWidths": {
          "0": "0",
          "2": "2px",
          "4": "4px",
          "8": "8px",
          "px": "1px"
        },
        "breakpoints": [
          "640px",
          "768px",
          "1024px",
          "1280px"
        ],
        "colors": {
          "transparent": "transparent",
          "black": "#000",
          "white": "#fff",
          "gray": [
            null,
            "#f7fafc",
            "#edf2f7",
            "#e2e8f0",
            "#cbd5e0",
            "#a0aec0",
            "#718096",
            "#4a5568",
            "#2d3748",
            "#1a202c"
          ],
          "red": [
            null,
            "#fff5f5",
            "#fed7d7",
            "#feb2b2",
            "#fc8181",
            "#f56565",
            "#e53e3e",
            "#c53030",
            "#9b2c2c",
            "#742a2a"
          ],
          "orange": [
            null,
            "#fffaf0",
            "#feebc8",
            "#fbd38d",
            "#f6ad55",
            "#ed8936",
            "#dd6b20",
            "#c05621",
            "#9c4221",
            "#7b341e"
          ],
          "yellow": [
            null,
            "#fffff0",
            "#fefcbf",
            "#faf089",
            "#f6e05e",
            "#ecc94b",
            "#d69e2e",
            "#b7791f",
            "#975a16",
            "#744210"
          ],
          "green": [
            null,
            "#f0fff4",
            "#c6f6d5",
            "#9ae6b4",
            "#68d391",
            "#48bb78",
            "#38a169",
            "#2f855a",
            "#276749",
            "#22543d"
          ],
          "teal": [
            null,
            "#e6fffa",
            "#b2f5ea",
            "#81e6d9",
            "#4fd1c5",
            "#38b2ac",
            "#319795",
            "#2c7a7b",
            "#285e61",
            "#234e52"
          ],
          "blue": [
            null,
            "#ebf8ff",
            "#bee3f8",
            "#90cdf4",
            "#63b3ed",
            "#4299e1",
            "#3182ce",
            "#2b6cb0",
            "#2c5282",
            "#2a4365"
          ],
          "indigo": [
            null,
            "#ebf4ff",
            "#c3dafe",
            "#a3bffa",
            "#7f9cf5",
            "#667eea",
            "#5a67d8",
            "#4c51bf",
            "#434190",
            "#3c366b"
          ],
          "purple": [
            null,
            "#faf5ff",
            "#e9d8fd",
            "#d6bcfa",
            "#b794f4",
            "#9f7aea",
            "#805ad5",
            "#6b46c1",
            "#553c9a",
            "#44337a"
          ],
          "pink": [
            null,
            "#fff5f7",
            "#fed7e2",
            "#fbb6ce",
            "#f687b3",
            "#ed64a6",
            "#d53f8c",
            "#b83280",
            "#97266d",
            "#702459"
          ],
          "grayDark": "#2d3748",
          "text": "#2d3748",
          "background": "#fff",
          "primary": "#2b6cb0",
          "primaryHover": "#2c5282",
          "secondary": "#718096",
          "muted": "#e2e8f0",
          "success": "#9ae6b4",
          "info": "#63b3ed",
          "warning": "#faf089",
          "danger": "#feb2b2",
          "light": "#f7fafc",
          "dark": "#2d3748",
          "textMuted": "#718096"
        },
        "fonts": {
          "sans": "-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
          "serif": "Georgia, Cambria, \"Times New Roman\", Times, serif",
          "mono": "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
          "body": "-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
          "heading": "inherit",
          "monospace": "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
        },
        "fontSizes": [
          "0.875rem",
          "1rem",
          "1.25rem",
          "1.5rem",
          "1.875rem",
          "2.25rem",
          "3rem",
          "4rem",
          "4.5rem"
        ],
        "fontWeights": {
          "hairline": "100",
          "thin": "200",
          "light": "300",
          "normal": "400",
          "medium": "500",
          "semibold": "600",
          "bold": "700",
          "extrabold": "800",
          "black": "900",
          "body": "400",
          "heading": "700"
        },
        "letterSpacings": {
          "tighter": "-0.05em",
          "tight": "-0.025em",
          "normal": "0",
          "wide": "0.025em",
          "wider": "0.05em",
          "widest": "0.1em"
        },
        "lineHeights": {
          "none": "1",
          "tight": "1.25",
          "snug": "1.375",
          "normal": "1.5",
          "relaxed": "1.625",
          "loose": "2",
          "body": "1.625",
          "heading": "1.25"
        },
        "sizes": {
          "0": "0",
          "1": "0.25rem",
          "2": "0.5rem",
          "3": "0.75rem",
          "4": "1rem",
          "5": "1.25rem",
          "6": "1.5rem",
          "8": "2rem",
          "10": "2.5rem",
          "12": "3rem",
          "16": "4rem",
          "20": "5rem",
          "24": "6rem",
          "32": "8rem",
          "40": "10rem",
          "48": "12rem",
          "56": "14rem",
          "64": "16rem",
          "px": "1px",
          "xs": "20rem",
          "sm": "24rem",
          "md": "28rem",
          "lg": "32rem",
          "xl": "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          "full": "100%",
          "screenHeight": "100vh",
          "screenWidth": "100vw"
        },
        "shadows": {
          "default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
          "outline": "0 0 0 3px rgba(66, 153, 225, 0.5)",
          "none": "none"
        },
        "space": [
          0,
          "0.25rem",
          "0.5rem",
          "1rem",
          "2rem",
          "4rem",
          "8rem",
          "16rem",
          "32rem"
        ],
        "radii": {
          "none": "0",
          "sm": "0.125rem",
          "default": "0.25rem",
          "lg": "0.5rem",
          "full": "9999px"
        },
        "zIndices": {
          "0": "0",
          "10": "10",
          "20": "20",
          "30": "30",
          "40": "40",
          "50": "50",
          "auto": "auto"
        },
        "styles": {
          "root": {
            "fontFamily": "body",
            "lineHeight": "body",
            "fontWeight": "body"
          },
          "a": {
            "color": "primary",
            "textDecoration": "none",
            ":hover": {
              "textDecoration": "underline"
            }
          },
          "h1": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 6,
            "mt": 2
          },
          "h2": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 5,
            "mt": 2
          },
          "h3": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 4,
            "mt": 3
          },
          "h4": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 3
          },
          "h5": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 2
          },
          "h6": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 2,
            "fontSize": 1
          },
          "code": {},
          "pre": {},
          "hr": {
            "bg": "muted",
            "border": 0,
            "height": "1px",
            "m": 3
          }
        },
        "buttons": {
          "simple": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "&:hover": {
              "backgroundColor": "primaryHover"
            }
          },
          "pill": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "full",
            "&:hover": {
              "backgroundColor": "primaryHover"
            }
          },
          "outline": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "transparent",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "primary",
            "color": "primary",
            "fontWeight": "semibold",
            "borderRadius": "default",
            "&:hover": {
              "backgroundColor": "primary",
              "color": "white",
              "borderColor": "transparent"
            }
          },
          "bordered": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "primaryHover",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "&:hover": {
              "backgroundColor": "primaryHover"
            }
          },
          "disabled": {
            "py": 2,
            "px": 3,
            "cursor": "not-allowed",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "opacity": 0.5,
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default"
          },
          "3D": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "borderBottomWidth": "4px",
            "borderBottomStyle": "solid",
            "borderBottomColor": "primaryHover",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "transition": "transform 0.3s ease-in-out",
            "&:hover": {
              "transform": "translateY(-1px)"
            }
          },
          "elevated": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "white",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "gray.4",
            "color": "text",
            "fontWeight": "bold",
            "borderRadius": "default",
            "boxShadow": "default",
            "&:hover": {
              "backgroundColor": "gray.1"
            }
          }
        },
        "inputs": {
          "shadow": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "default",
            "appearance": "none",
            "lineHeight": "tight",
            "border": "none",
            "color": "gray.7",
            "boxShadow": "default",
            "&:focus": {
              "outline": "none",
              "boxShadow": "outline"
            }
          },
          "inline": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "default",
            "appearance": "none",
            "lineHeight": "tight",
            "backgroundColor": "gray.2",
            "borderWidth": "2px",
            "borderStyle": "solid",
            "borderColor": "gray.2",
            "color": "gray.7",
            "&:focus": {
              "outline": "none",
              "borderColor": "primary",
              "backgroundColor": "white"
            }
          },
          "underline": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "0px",
            "appearance": "none",
            "lineHeight": "tight",
            "backgroundColor": "transparent",
            "border": "none",
            "borderBottomWidth": "2px",
            "borderBottomStyle": "solid",
            "borderBottomColor": "primary",
            "color": "gray.7",
            "&:focus": {
              "outline": "none",
              "borderColor": "primary",
              "backgroundColor": "white"
            }
          }
        }
      },
      "default": {
        "borderWidths": {
          "0": "0",
          "2": "2px",
          "4": "4px",
          "8": "8px",
          "px": "1px"
        },
        "breakpoints": [
          "640px",
          "768px",
          "1024px",
          "1280px"
        ],
        "colors": {
          "transparent": "transparent",
          "black": "#000",
          "white": "#fff",
          "gray": [
            null,
            "#f7fafc",
            "#edf2f7",
            "#e2e8f0",
            "#cbd5e0",
            "#a0aec0",
            "#718096",
            "#4a5568",
            "#2d3748",
            "#1a202c"
          ],
          "red": [
            null,
            "#fff5f5",
            "#fed7d7",
            "#feb2b2",
            "#fc8181",
            "#f56565",
            "#e53e3e",
            "#c53030",
            "#9b2c2c",
            "#742a2a"
          ],
          "orange": [
            null,
            "#fffaf0",
            "#feebc8",
            "#fbd38d",
            "#f6ad55",
            "#ed8936",
            "#dd6b20",
            "#c05621",
            "#9c4221",
            "#7b341e"
          ],
          "yellow": [
            null,
            "#fffff0",
            "#fefcbf",
            "#faf089",
            "#f6e05e",
            "#ecc94b",
            "#d69e2e",
            "#b7791f",
            "#975a16",
            "#744210"
          ],
          "green": [
            null,
            "#f0fff4",
            "#c6f6d5",
            "#9ae6b4",
            "#68d391",
            "#48bb78",
            "#38a169",
            "#2f855a",
            "#276749",
            "#22543d"
          ],
          "teal": [
            null,
            "#e6fffa",
            "#b2f5ea",
            "#81e6d9",
            "#4fd1c5",
            "#38b2ac",
            "#319795",
            "#2c7a7b",
            "#285e61",
            "#234e52"
          ],
          "blue": [
            null,
            "#ebf8ff",
            "#bee3f8",
            "#90cdf4",
            "#63b3ed",
            "#4299e1",
            "#3182ce",
            "#2b6cb0",
            "#2c5282",
            "#2a4365"
          ],
          "indigo": [
            null,
            "#ebf4ff",
            "#c3dafe",
            "#a3bffa",
            "#7f9cf5",
            "#667eea",
            "#5a67d8",
            "#4c51bf",
            "#434190",
            "#3c366b"
          ],
          "purple": [
            null,
            "#faf5ff",
            "#e9d8fd",
            "#d6bcfa",
            "#b794f4",
            "#9f7aea",
            "#805ad5",
            "#6b46c1",
            "#553c9a",
            "#44337a"
          ],
          "pink": [
            null,
            "#fff5f7",
            "#fed7e2",
            "#fbb6ce",
            "#f687b3",
            "#ed64a6",
            "#d53f8c",
            "#b83280",
            "#97266d",
            "#702459"
          ],
          "grayDark": "#2d3748",
          "text": "#2d3748",
          "background": "#fff",
          "primary": "#2b6cb0",
          "primaryHover": "#2c5282",
          "secondary": "#718096",
          "muted": "#e2e8f0",
          "success": "#9ae6b4",
          "info": "#63b3ed",
          "warning": "#faf089",
          "danger": "#feb2b2",
          "light": "#f7fafc",
          "dark": "#2d3748",
          "textMuted": "#718096"
        },
        "fonts": {
          "sans": "-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
          "serif": "Georgia, Cambria, \"Times New Roman\", Times, serif",
          "mono": "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
          "body": "-apple-system, BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
          "heading": "inherit",
          "monospace": "Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
        },
        "fontSizes": [
          "0.875rem",
          "1rem",
          "1.25rem",
          "1.5rem",
          "1.875rem",
          "2.25rem",
          "3rem",
          "4rem",
          "4.5rem"
        ],
        "fontWeights": {
          "hairline": "100",
          "thin": "200",
          "light": "300",
          "normal": "400",
          "medium": "500",
          "semibold": "600",
          "bold": "700",
          "extrabold": "800",
          "black": "900",
          "body": "400",
          "heading": "700"
        },
        "letterSpacings": {
          "tighter": "-0.05em",
          "tight": "-0.025em",
          "normal": "0",
          "wide": "0.025em",
          "wider": "0.05em",
          "widest": "0.1em"
        },
        "lineHeights": {
          "none": "1",
          "tight": "1.25",
          "snug": "1.375",
          "normal": "1.5",
          "relaxed": "1.625",
          "loose": "2",
          "body": "1.625",
          "heading": "1.25"
        },
        "sizes": {
          "0": "0",
          "1": "0.25rem",
          "2": "0.5rem",
          "3": "0.75rem",
          "4": "1rem",
          "5": "1.25rem",
          "6": "1.5rem",
          "8": "2rem",
          "10": "2.5rem",
          "12": "3rem",
          "16": "4rem",
          "20": "5rem",
          "24": "6rem",
          "32": "8rem",
          "40": "10rem",
          "48": "12rem",
          "56": "14rem",
          "64": "16rem",
          "px": "1px",
          "xs": "20rem",
          "sm": "24rem",
          "md": "28rem",
          "lg": "32rem",
          "xl": "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          "full": "100%",
          "screenHeight": "100vh",
          "screenWidth": "100vw"
        },
        "shadows": {
          "default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
          "outline": "0 0 0 3px rgba(66, 153, 225, 0.5)",
          "none": "none"
        },
        "space": [
          0,
          "0.25rem",
          "0.5rem",
          "1rem",
          "2rem",
          "4rem",
          "8rem",
          "16rem",
          "32rem"
        ],
        "radii": {
          "none": "0",
          "sm": "0.125rem",
          "default": "0.25rem",
          "lg": "0.5rem",
          "full": "9999px"
        },
        "zIndices": {
          "0": "0",
          "10": "10",
          "20": "20",
          "30": "30",
          "40": "40",
          "50": "50",
          "auto": "auto"
        },
        "styles": {
          "root": {
            "fontFamily": "body",
            "lineHeight": "body",
            "fontWeight": "body"
          },
          "a": {
            "color": "primary",
            "textDecoration": "none",
            ":hover": {
              "textDecoration": "underline"
            }
          },
          "h1": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 6,
            "mt": 2
          },
          "h2": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 5,
            "mt": 2
          },
          "h3": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 4,
            "mt": 3
          },
          "h4": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 3
          },
          "h5": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 1,
            "fontSize": 2
          },
          "h6": {
            "fontFamily": "heading",
            "fontWeight": "heading",
            "lineHeight": "heading",
            "m": 0,
            "mb": 2,
            "fontSize": 1
          },
          "code": {},
          "pre": {},
          "hr": {
            "bg": "muted",
            "border": 0,
            "height": "1px",
            "m": 3
          }
        },
        "buttons": {
          "simple": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "&:hover": {
              "backgroundColor": "primaryHover"
            }
          },
          "pill": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "full",
            "&:hover": {
              "backgroundColor": "primaryHover"
            }
          },
          "outline": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "transparent",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "primary",
            "color": "primary",
            "fontWeight": "semibold",
            "borderRadius": "default",
            "&:hover": {
              "backgroundColor": "primary",
              "color": "white",
              "borderColor": "transparent"
            }
          },
          "bordered": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "primaryHover",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "&:hover": {
              "backgroundColor": "primaryHover"
            }
          },
          "disabled": {
            "py": 2,
            "px": 3,
            "cursor": "not-allowed",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "opacity": 0.5,
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default"
          },
          "3D": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "primary",
            "border": "none",
            "borderBottomWidth": "4px",
            "borderBottomStyle": "solid",
            "borderBottomColor": "primaryHover",
            "color": "white",
            "fontWeight": "bold",
            "borderRadius": "default",
            "transition": "transform 0.3s ease-in-out",
            "&:hover": {
              "transform": "translateY(-1px)"
            }
          },
          "elevated": {
            "py": 2,
            "px": 3,
            "cursor": "pointer",
            "fontSize": "100%",
            "lineHeight": "inherit",
            "backgroundColor": "white",
            "borderWidth": "1px",
            "borderStyle": "solid",
            "borderColor": "gray.4",
            "color": "text",
            "fontWeight": "bold",
            "borderRadius": "default",
            "boxShadow": "default",
            "&:hover": {
              "backgroundColor": "gray.1"
            }
          }
        },
        "inputs": {
          "shadow": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "default",
            "appearance": "none",
            "lineHeight": "tight",
            "border": "none",
            "color": "gray.7",
            "boxShadow": "default",
            "&:focus": {
              "outline": "none",
              "boxShadow": "outline"
            }
          },
          "inline": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "default",
            "appearance": "none",
            "lineHeight": "tight",
            "backgroundColor": "gray.2",
            "borderWidth": "2px",
            "borderStyle": "solid",
            "borderColor": "gray.2",
            "color": "gray.7",
            "&:focus": {
              "outline": "none",
              "borderColor": "primary",
              "backgroundColor": "white"
            }
          },
          "underline": {
            "py": 2,
            "px": 3,
            "fontSize": "100%",
            "borderRadius": "0px",
            "appearance": "none",
            "lineHeight": "tight",
            "backgroundColor": "transparent",
            "border": "none",
            "borderBottomWidth": "2px",
            "borderBottomStyle": "solid",
            "borderBottomColor": "primary",
            "color": "gray.7",
            "&:focus": {
              "outline": "none",
              "borderColor": "primary",
              "backgroundColor": "white"
            }
          }
        }
      },
      "styles": {
        "root": {
          "fontFamily": "body",
          "fontSize": 2,
          "fontWeight": "body",
          "lineHeight": "body"
        },
        "img": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "maxWidth": "100%"
        },
        "h1": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "fontSize": 5,
          "fontFamily": "heading",
          "lineHeight": "heading",
          "fontWeight": "heading"
        },
        "h2": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "fontSize": 4,
          "fontFamily": "heading",
          "lineHeight": "heading",
          "fontWeight": "heading"
        },
        "h3": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "fontSize": 3,
          "fontFamily": "heading",
          "lineHeight": "heading",
          "fontWeight": "heading"
        },
        "h4": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "fontSize": 2,
          "fontFamily": "heading",
          "lineHeight": "heading",
          "fontWeight": "heading"
        },
        "h5": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "fontSize": 1,
          "fontFamily": "heading",
          "lineHeight": "heading",
          "fontWeight": "heading"
        },
        "h6": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "fontSize": 0,
          "fontFamily": "heading",
          "lineHeight": "heading",
          "fontWeight": "heading"
        },
        "ul": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "listStylePosition": "outside",
          "listStyleImage": "none",
          "ml": 3
        },
        "ol": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "listStylePosition": "outside",
          "listStyleImage": "none",
          "ml": 3
        },
        "li": {
          "mb": 2,
          "pl": 0,
          "ol": {
            "my": 2,
            "ml": 3
          },
          "ul": {
            "my": 2,
            "ml": 3
          },
          "p": {
            "mb": 2
          }
        },
        "p": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3
        },
        "table": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "borderCollapse": "collapse",
          "width": "100%"
        },
        "th": {
          "textAlign": "left",
          "borderBottom": "1px solid",
          "px": 2,
          "py": 1,
          ":first-child": {
            "pl": 0
          },
          ":last-child": {
            "pr": 0
          }
        },
        "td": {
          "textAlign": "left",
          "borderBottom": "1px solid",
          "px": 2,
          "py": 1,
          "mt": "-1px",
          ":first-child": {
            "pl": 0
          },
          ":last-child": {
            "pr": 0
          }
        },
        "blockquote": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "mx": 3
        },
        "hr": {
          "padding": 0,
          "margin": 0,
          "marginBottom": 3,
          "border": 0,
          "borderBottom": "1px solid",
          "mt": "-1px",
          "mb": 3
        },
        "b": {
          "fontWeight": "bold"
        },
        "strong": {
          "fontWeight": "bold"
        },
        "code": {
          "fontSize": "85%"
        },
        "pre": {
          "padding": 3,
          "margin": 0,
          "marginBottom": 3,
          "fontSize": "85%"
        }
      },
      "typography": {
        "options": {
          "baseFontSize": 16,
          "baseLineHeight": 1.45,
          "headerLineHeight": 1.1,
          "scaleRatio": 2,
          "googleFonts": [],
          "headerFontFamily": [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "sans-serif"
          ],
          "bodyFontFamily": [
            "georgia",
            "serif"
          ],
          "headerWeight": "bold",
          "bodyWeight": "normal",
          "boldWeight": "bold",
          "includeNormalize": true,
          "blockMarginBottom": 1,
          "rhythmUnit": "px"
        }
      },
      "minWidth": {
        "content-column-padding": "2vw",
        "grid-gap": "1rem",
        "content-gap": "1rem",
        "content-column": "1200px"
      },
      "maxWidth": {
        "content-column-padding": "2vw",
        "grid-gap": "1rem",
        "content-gap": "1rem",
        "content-column": "1200px"
      },
      "minHeight": {
        "content-column-padding": "2vw",
        "grid-gap": "1rem",
        "content-gap": "1rem",
        "content-column": "1200px"
      },
      "maxHeight": {
        "content-column-padding": "2vw",
        "grid-gap": "1rem",
        "content-gap": "1rem",
        "content-column": "1200px"
      }
    }
  }
}