import { createUseStyles } from 'react-jss'

const verticalCenterHorizontalCorners = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const borderSpecification = {
  border: '1.5px solid rgb(236, 236, 236)',
  borderRadius: '12px',
}

export const useDropdownStyles = createUseStyles({
  dropdown: {
    position: 'relative',
  },
  dropdownButton: {
    backgroundColor: 'white',
    width: '280px',
    height: '45px',
    paddingInline: '15px',
    cursor: 'pointer',
    textAlign: 'left',
    fontWeight: '600',
    color: '#595a5c',
    ...borderSpecification,
    ...verticalCenterHorizontalCorners,
    '&:focus': {
      borderColor: '#1167f2',
      boxShadow: '0 0 5px 2px rgba(17, 103, 242, 0.5)',
    },
  },
  dropdownContent: {
    position: 'absolute',
    marginTop: '5px',
    padding: '10px 10px 5px 10px',
    boxSizing: 'border-box',
    width: '280px',
    maxHeight: '300px',
    overflow: 'auto',
    ...borderSpecification,
    '& .item': {
      color: '#595a5c',
      padding: '12px 16px',
      textDecoration: 'none',
      cursor: 'pointer',
      borderRadius: '8px',
      marginBottom: '5px',
      ...verticalCenterHorizontalCorners,
    },
    '& .active-item, & .item:hover': {
      color: '#1167f2',
      backgroundColor: 'rgba(17, 103, 242, 0.1)',
      fontWeight: '600',
    },
  },
})
