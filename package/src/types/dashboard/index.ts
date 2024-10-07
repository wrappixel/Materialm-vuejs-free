import type { TablerIconComponent } from "vue-tabler-icons";

/*Card types*/
type BlogCards = {
    avatar: string;
    coveravatar: string;
    read: string;
    title: string;
    link: string;
    category: string;
    name: string;
    view: string;
    comments: string;
    time: string;
};


/*Table Action*/
type tableAction = {
    icon: TablerIconComponent;
    listtitle: string;
};

type ProductTable = {
    img: string;
    name: string;
    payment: string;
    paymentstatus: string;
    process: number;
    processcolor: string;
    statuscolor: string;
    statustext: string;
};

type EarningReports={
    icon: string;
    subtitle: string;
    title: string;
    color: string;
    statuscolor: string;
    statustext: string;
};

export type{EarningReports,BlogCards,tableAction,ProductTable}