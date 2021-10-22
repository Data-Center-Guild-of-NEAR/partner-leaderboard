import styled from 'styled-components'
import { useState, useMemo } from 'react'


import Partner from '../../data/partner-list.json';

const TrendingContainer = styled.div`
    max-width: 1140px;
    height: 892px;

    background: #FFFFFF;
    /* Table Shadow */

    box-shadow: 0px 0px 30px rgba(66, 0, 255, 0.05);
    border-radius: 9px;
`

const TrendingHeader = styled.div`
    width: 1140px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TrendingButtonSection = styled.div`
    width: 168px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const TrendingButton = styled.button`
    width: 42px;
    height: 32px;
    background: #FAFBFD;
    border: 1px solid #6B6EF9;
    box-sizing: border-box;
    border-radius: 5px;
`

const TrendingTitle = styled.div`
    width: 202px;
    height: 22px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 21px;
    /* or 87% */


    color: #49577A;
`

const PulseTrending = () => {
    return(
        <TrendingContainer>
            <TrendingHeader>
                <TrendingTitle>NEAR dApps</TrendingTitle>
                <TrendingButtonSection>
                    <TrendingButton>Trending</TrendingButton>
                    <TrendingButton>All</TrendingButton>
                    <TrendingButton>DeFi</TrendingButton>
                    <TrendingButton>NFT</TrendingButton>
                    <TrendingButton>Gaming</TrendingButton>
                    <TrendingButton>Dev Tooling</TrendingButton>
                    <TrendingButton>Other</TrendingButton>
                </TrendingButtonSection>
                 <TrendingButtonSection>
                    <TrendingButton>24h</TrendingButton>
                    <TrendingButton>1w</TrendingButton>
                    <TrendingButton>1m</TrendingButton>
                    <TrendingButton>All</TrendingButton>
                </TrendingButtonSection>
            </TrendingHeader>
        </TrendingContainer>
    )
}

export default PulseTrending