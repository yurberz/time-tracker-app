import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background: ${(props) => props.theme.colors.pageBackground}; 
  transition: background .3s; 
}

.title {
  margin-bottom: 60px;
  font-size: 56px;
  color: ${(props) => props.theme.colors.titleColor};
}

.form {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 2px;
  margin-bottom: 30px;

  width: 100%;
  height: 46px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.5);

  background: ${(props) => props.theme.colors.pageBackground};
}

.form-input {
  padding: 0px 10px;
  width: 90%;

  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.colors.textColor};
  font-weight: 500;
  text-align: center;

  &::placeholder {
    font-weight: 400;
    transition: color .3s;
    }

    &:focus {
      &::placeholder {
        color: transparent;
        transition: color .3s;
      }
    }
  }

  .form-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;

    outline: none;
    border: none;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.titleColor};
    color: ${(props) => props.theme.colors.pageBackground};
    transition: color background .3s;
  }

  .list {
    display: flex;
    flex-direction: column;

    width: 99%;
  }

  .list-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 10px 10px 10px 20px;
    border-radius: 20px;

    background: ${(props) => props.theme.colors.pageBackground};
    color: ${(props) => props.theme.colors.textColor};
    transition: color background .3s;
  }

  .list-item.active {
    background: floralwhite;
    transition: background .3s;

    .list-text {
        color: #dc658b;
        transition: color .3s;
    }
  }

  .list-item:not(last-child) {
    margin-bottom: 10px;
  }

  .list-text {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.33px;
    color: ${(props) => props.theme.colors.textColor};
  }

  .list-text:nth-child(1) {
    flex: 2;
    text-overflow: ellipsis;
    margin-right: 5px;
    overflow: hidden;
  }

.list-text:nth-child(2) {
    flex: 1;
    font-weight: 500;
  }

.list-toggleBtn {
  margin-right: 5px;
}

.list-toggleBtn,
.list-deleteBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;

  outline: none;
  border: none;
  border-radius: 20px;

  background-color: ${(props) => props.theme.colors.titleColor};
  color: ${(props) => props.theme.colors.pageBackground};
  
}

.wrapper {
  position: relative;
}

.toggle-button {
  position: absolute;
  top: -15px;
  right: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colors.titleColor};
  color: ${(props) => props.theme.colors.pageBackground};
  transition: color background .3s;

   &:focus {
   outline: none;
  }
}

.scroll-wrapper {
  width: 100%;
  max-height: 500px;
  overflow-y: scroll;
  z-index: 1;
  overscroll-behavior: smooth;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 3px;
  border-radius: 5px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.colors.titleColor};
  border-radius: 5px;
}

@media screen and (min-width: 560px) {
  .list-text {
    font-size: 18px;
  }

  .toggle-button {
    right: -170px;
  }
}
`;

export default GlobalStyle;
