const LoboxArrow = ({ rotate }: { rotate: boolean }) => (
  <svg
    style={{
      transition: 'all 0.3s ease',
      transform: rotate ? 'rotate(180deg)' : '',
    }}
    fill="#595a5c"
    height="16px"
    width="16px"
    viewBox="0 0 330 330"
  >
    <path
      id="XMLID_225_"
      d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
    />
  </svg>
)

const LoboxCheck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="16px"
    height="16px"
    fill="#1167f2"
  >
    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
  </svg>
)

const icons = {
  LoboxArrow,
  LoboxCheck,
}

export default icons