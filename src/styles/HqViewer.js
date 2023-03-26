import styled from 'styled-components';

export const HqViewerWrapper = styled.div`
    width: 100%;
    background: linear-gradient(123deg, #3AAAFF 0%, #056BE8 24%, #00204A 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`
export const HqInfoWrapper = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
`

export const HqTitle = styled.p`
    text-align: center;
    color: #fff;
    font-size: 30px;
    display: flex;
    margin: 5px 20px;
    
`

export const HqCover = styled.img`
    max-width: 400px;
    max-height: 500px;
    margin: 20px 0 5px 0;
`

export const HqDescription = styled.p`
    max-width: 90%;
    color: #000;
    background-color: white;
    border-radius: 15px;
    margin: 20px;
    padding: 15px;
`