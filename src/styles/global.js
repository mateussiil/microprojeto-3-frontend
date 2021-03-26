import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    :root {
        --mainBgColor: #ebebeb;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--mainBgColor);
        min-height: 100%;
    }

    a {
        text-decoration: none;
    }

    .active-route svg {
        color: #0388e5;
    }

    .active-route span {
        color: #0388e5;
    }

    .left-header {
        display: none;
    }

    .p-column-title {
        display: block;
        font-weight: 900;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .p-datatable-sm {
        font-size: 0.6em;
    }

    .p-datatable .p-datatable-tbody > tr {
        color: #000;
    }

    .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
        padding: 0.1rem 0.5rem;
    }

    .p-button {
        background: #0a4f90;
        border: 1px solid #0a4f90;
    }

    .p-dialog-title {
        width: 100%;
    }

    .dropdown-visible .p-dialog-content {
        overflow-y: visible;
    }

    .p-orderlist-personal{
        .p-orderlist-controls{
            display: none;
        }
    }

    .list-order-service{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
    }

    .item-order-service{
        display: flex;
    }

    .info-text {
        cursor: default;
    }

    @media (orientation: portrait), (max-width: 820px) {
        .responsive-table {
            font-size: 0.7em;
        }

        .responsive-table .p-datatable-thead > tr > th,
        .responsive-table .p-datatable-tfoot > tr > td {
            display: none !important;
        }

        .responsive-table .p-datatable-tbody > tr > td {
            text-align: left;
            display: block;
            width: 100%;
            float: left;
            clear: left;
            border: 0 none;
        }

        .responsive-table .p-datatable-tbody > tr > td .left-header {
            padding: .4rem;
            min-width: 30%;
            max-width: 100px;
            display: inline-block;
            margin: -.4em 1em -.4em -.4rem;
            font-weight: bold;
        }

        .responsive-table .p-datatable-tbody > tr > td:last-child {
            border-bottom: 1px solid #eeeeee;
        }

        .p-search-bar {
            display: inline;
        }
    }
`;