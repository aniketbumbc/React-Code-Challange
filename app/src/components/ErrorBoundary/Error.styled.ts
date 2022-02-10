import styledComponents from 'styled-components';

export const ErrorStyled = styledComponents.div`  
   text-align: center;
   color:red;
   width: 100%;
   heigtht:100%;
   position: absolute;
   margin-top:10px;
   font-size:25px;
   font-weight:bold;
   left: 50%;
   top: 50%;
   -webkit-transform: translate(-50%, -50%);
   transform: translate(-50%, -50%);
`;

export const RefreshStyled = styledComponents.div`
`;

export const RefreshButtonStyled = styledComponents.button`
border-radius: 3px;
margin:10px;
padding: 10px;
`;
