import styled from 'styled-components'

export const PulseStatsContainer = styled.div`
    max-width: 1440px;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: gray;
`

export const StatsSection = styled.section`
    width: 1140px;
    height: 190px;
    left: 151px;
    top: 435px;

    background: #FFFFFF;
    /* Table Shadow */

    box-shadow: 0px 0px 30px rgba(66, 0, 255, 0.05);
    border-radius: 9px;
    padding-left: 34px;
    padding-right: 34px;
`
export const StatsHeader = styled.div`
    width: 1140px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const StatsHeaderTitle = styled.h3`
    width: 202px;
    height: 22px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 21px;


    color: #707B9B;
`
export const StatsButtonSection = styled.div`
    width: 168px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StatsButton = styled.button`
    width: 42px;
    height: 32px;
    background: #FAFBFD;
    border: 1px solid #6B6EF9;
    box-sizing: border-box;
    border-radius: 5px;
`
export const NumberSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 75px;
`
const StatsTitle = styled.p`
    width: 109.81px;
    height: 17px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    /* identical to box height, or 17px */
    color: #A2A5AF;
`
const StatsNumber = styled.p`
    width: 137.26px;
    height: 43px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 120%;
    /* or 43px */

    color: #49577A;
`
const StatsPercentage = styled.p`
    width: 27px;
    height: 21px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;

    color: #1BC59C;
`

export const StatsDetails = (props) => {
    return(
        <>
            <StatsTitle>{props.title}</StatsTitle>
            <StatsNumber>{props.number}</StatsNumber>
            <StatsPercentage>{props.percent}</StatsPercentage>
        </>
    )
} 