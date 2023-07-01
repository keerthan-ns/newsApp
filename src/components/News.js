import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Navalnews.com"
            },
            "author": "Tomasz Grotnik",
            "title": "Polish coastal defence system with NSM missiles for Ukraine? - Naval News",
            "description": "Talks are underway between Poland and Ukraine regarding the transfer of NSM missile coastal defence system (CDS) belonging to the Polish Navy",
            "url": "https://www.navalnews.com/naval-news/2023/06/polish-coastal-defence-system-with-nsm-missiles-for-ukraine/",
            "urlToImage": "https://www.navalnews.com/wp-content/uploads/2023/06/Polish-NSM.jpg",
            "publishedAt": "2023-06-30T08:33:53Z",
            "content": "Polish defence media Defence24 broke the story, For now, it is not known which elements of the system are expected to go to Ukraine. Unofficially, it is said that it could be one battery (three self-… [+3439 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Russia repels attacks in various directions, Ukraine claims progress in Bakhmut | WION LIVE - WION",
            "description": "Russia had repelled various attacks from Ukrainian forces in various directions and strike ammunition warehouses of Ukraine. In a daily briefing, the Russian...",
            "url": "https://www.youtube.com/watch?v=pW4i6QQruJ8",
            "urlToImage": "https://i.ytimg.com/vi/pW4i6QQruJ8/maxresdefault_live.jpg",
            "publishedAt": "2023-06-30T08:04:39Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "France shooting: Policeman charged over teen's traffic stop death - BBC",
            "description": "France sees a third night of mass unrest, triggered by Tuesday's police shooting of a teenager.",
            "url": "https://www.bbc.com/news/world-europe-66061138",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/67C4/production/_130246562_567983cbbb3490546ba1fad32e47d767fcfae45a.jpg",
            "publishedAt": "2023-06-30T07:27:05Z",
            "content": "A French policeman has been charged with homicide and is now in custody over the killing of a teenager during a traffic stop near Paris on Tuesday. \r\nThe 17-year-old, named as Nahel M, was shot at po… [+2941 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Andrea Blanco",
            "title": "Titanic submarine latest: OceanGate still advertising Titan trips after human remains recovered from wreckage - The Independent",
            "description": "Titanic submarine implosion wreckage found - latest updates",
            "url": "https://www.independent.co.uk/news/world/americas/titanic-sub-human-remains-found-oceangate-b2366961.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/28/20/oceangate%20titan%20wreck%20victims.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-30T05:46:41Z",
            "content": "OceanGate sub pilot job opening sparks backlash on TikTok\r\nA job advert posted by the company that operated the doomed Titanic submersible that imploded last week in the Atlantic Ocean has sparked ba… [+1319 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Daniel Wu",
            "title": "Dylan Mulvaney addresses Bud Light backlash in new video - The Washington Post",
            "description": "Transgender influencer Dylan Mulvaney spoke out for the first time about enduring hate after her sponsored video kicked off a conservative boycott of Bud Light.",
            "url": "https://www.washingtonpost.com/nation/2023/06/29/mulvaney-speaks-out-bud-light/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6EEB2YQLZQH3GSG6MCJBJRPY54_size-normalized.jpg&w=1440",
            "publishedAt": "2023-06-30T05:08:59Z",
            "content": "Dylan Mulvaney feared leaving her home and felt unsupported by Bud Light as the transgender social media influencer endured a torrent of right-wing backlash over an Instagram video in which she promo… [+3025 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Lawrence Richard",
            "title": "Biden says he's 'not the essential man' during 2024 campaign fundraiser with Wall Street execs - Fox Business",
            "description": "President Biden held a pair of fundraisers in Manhattan with Wall Street executives on Thursday ahead of a reporting deadline to the Federal Election Commission.",
            "url": "https://www.foxbusiness.com/politics/biden-says-not-essential-man-2024-campaign-fundraiser-wall-street-execs",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/06/0/0/AP23180630294123.jpg?ve=1&tl=1",
            "publishedAt": "2023-06-30T04:50:09Z",
            "content": "President Biden concluded an end-of-quarter campaign blitz Thursday with a pair of fundraisers in Manhattan, where he told Wall Street power brokers that he was \"not the essential man\" going into his… [+4859 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Chairwoman of the California Reparations Task Force discusses historic report - KCAL News",
            "description": "The chairwoman of the California Reparations Task Force said she hopes people read the over 1,000-page report with an open heart and mind. Tom Wait reports.",
            "url": "https://www.youtube.com/watch?v=pbm28SRd-Zw",
            "urlToImage": "https://i.ytimg.com/vi/pbm28SRd-Zw/maxresdefault.jpg",
            "publishedAt": "2023-06-30T04:38:45Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Harvard Crimson"
            },
            "author": null,
            "title": "Supreme Court, President Biden Take Aim at Legacy Admissions | News - Harvard Crimson",
            "description": "Legacy admissions are under renewed scrutiny following the Supreme Court’s Thursday decision to dramatically curtail the use of race in college admissions.",
            "url": "https://www.thecrimson.com/article/2023/6/30/legacy-scrutiny-sffa-harvard/",
            "urlToImage": "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2022/10/31/202351_1359066.jpg.2000x1333_q95_crop-smart_upscale.jpg",
            "publishedAt": "2023-06-30T03:31:42Z",
            "content": "Legacy admissions are under renewed scrutiny following the Supreme Courts Thursday decision to dramatically curtail the use of race in college admissions.\r\nThough the Supreme Court is divided along i… [+3703 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Faris Tanyos",
            "title": "Virginia sheriff gave out deputy badges in exchange for cash bribes, feds say - CBS News",
            "description": "The longtime Culpeper County sheriff accepted more than $72,000 in bribes from at least eight people, including two undercover FBI agents, authorities said.",
            "url": "https://www.cbsnews.com/news/virginia-sheriff-culpeper-county-scott-jenkins-deputy-badges-cash-bribes-feds/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/06/30/211c63f6-cc09-499c-bdf1-4847e4604393/thumbnail/1200x630/4897d29035952c45612e338c7fcc70e2/gettyimages-1194254277.jpg?v=f3503a7856c58c20acab4eae8bb1f0f4",
            "publishedAt": "2023-06-30T03:30:00Z",
            "content": "A Virginia sheriff is facing federal charges after being accused of accepting tens of thousands of dollars in cash bribes in exchange for giving out deputy badges, authorities announced Thursday. Thr… [+2134 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FOX19"
            },
            "author": null,
            "title": "Taylor Swift concertgoers in Cincinnati have reserved parking spots canceled at the last minute - FOX19",
            "description": "Users of an app called ParkWhiz received cancellation notices days before the shows.",
            "url": "https://www.fox19.com/2023/06/30/taylor-swift-concertgoers-cincinnati-have-reserved-parking-spots-canceled-last-minute/",
            "urlToImage": "https://gray-wxix-prod.cdn.arcpublishing.com/resizer/6Q9DM2XlW0qqUbyL9EJ3wpyT3pA=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/QLTSPFZQSRCGZPVPIZL4VM555M.jpg",
            "publishedAt": "2023-06-30T02:25:00Z",
            "content": "CINCINNATI (WXIX) - Some Swifties coming to Downtown Cincinnati for the Taylor Swift concerts this weekend had their reserved parking spots taken away just dayseven hoursbefore the shows.\r\nParking is… [+1439 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "United Airlines travelers out of SFO face delays and cancellations - NBC Bay Area",
            "description": "Thousands of United Airlines flights have been delayed or canceled this week as the airline struggled with bad weather and staffing problems. Robert Handa re...",
            "url": "https://www.youtube.com/watch?v=qWBRQZm4_Q4",
            "urlToImage": "https://i.ytimg.com/vi/qWBRQZm4_Q4/maxresdefault.jpg",
            "publishedAt": "2023-06-30T01:51:59Z",
            "content": null
        },
        {
            "source": {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly"
            },
            "author": "Lauren Huff",
            "title": "Debi Mazar shares Madonna health update after hospitalization - Entertainment Weekly News",
            "description": "The Queen of Pop recently spent several days in the ICU with a bacterial infection.",
            "url": "https://ew.com/celebrity/debi-mazar-gives-madonna-health-update/",
            "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C104%2C2000%2C1104&poi=%5B1000%2C639%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F06%2F30%2FDebi-Mazar-and-Madonna-01-062923.jpg",
            "publishedAt": "2023-06-30T01:30:00Z",
            "content": "Debi Mazar is a true-blue friend to Madonna.\r\nThe Younger actress is sharing some public well wishes and providing an update on the health of her longtime pal, who recently spent several days hospita… [+1481 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Yahoo Sports Staff",
            "title": "NBA free agency 2023 tracker: James Harden, 76ers will explore trade scenarios; latest news, rumors, trades - Yahoo Sports",
            "description": "Follow Yahoo Sports for the latest NBA free agency news ahead of the period opening at 6 p.m. ET Friday.",
            "url": "https://sports.yahoo.com/nba-free-agency-2023-tracker-james-harden-76ers-will-explore-trade-scenarios-latest-news-rumors-trades-204939902.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/pm0by0vbzzUpE71cpkW5Eg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/d7e1aae0-15ec-11ee-b2b3-aa2ca88a657d",
            "publishedAt": "2023-06-30T01:30:00Z",
            "content": "NBA free agency begins at 6 p.m. ET Friday as teams can start negotiating deals with free-agent players. Those deals can become official July 6. Between Friday and July 6, all deals can be agreed upo… [+1814 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Suzy Byrne",
            "title": "Kevin Costner claims estranged wife Christine spent $188K a month on plastic surgery last year - Yahoo Entertainment",
            "description": "Kevin Costner does not want his child support payments to cover his soon-to-be ex-wife's cosmetic surgery procedures. He also sets the record straight on her...",
            "url": "https://www.yahoo.com/entertainment/kevin-costner-claims-estranged-wife-012732914.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/7ZeKZYJR6booGr3UyrDqMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/e61c62b0-16ac-11ee-b9fe-ef038d36279e",
            "publishedAt": "2023-06-30T01:27:00Z",
            "content": "Kevin Costner's divorce from wife Christine continues to be ugly. He claims she spent over $2 million on plastic surgery last year. He rips her for making public that he broke the news about their di… [+10331 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Arizona Sports"
            },
            "author": ", Kellan Olson",
            "title": "Bradley Beal will unlock new dimension for himself, Booker, Durant - Arizona Sports",
            "description": "Bradley Beal is antsy to see what the Phoenix Suns will look like on the court and the challenges they will present defenses. Us too.",
            "url": "https://arizonasports.com/story/3527012/bradley-beal-will-unlock-new-dimension-for-himself-booker-durant/",
            "urlToImage": "http://arizonasports.com/wp-content/uploads/2023/06/GettyImages-1481807501-e1688079846983.jpg",
            "publishedAt": "2023-06-30T01:27:00Z",
            "content": "PHOENIX — We will see it on a court in three months time. But for the sake of the present, let’s picture it.\r\nNew Phoenix Suns guard Bradley Beal takes the ball up. With a spaced-out set, Beal is at … [+7785 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Nick Visser",
            "title": "Judge Says Trump Can’t Claim Presidential Immunity To Dismiss Defamation Suit - Yahoo News",
            "description": "Writer E. Jean Carroll is suing the ex-president for at least $10 million in damages.",
            "url": "https://www.huffpost.com/entry/trump-e-jean-carroll-defamation_n_649e072fe4b065a315b7e200",
            "urlToImage": "https://media.zenfs.com/en/the_huffington_post_584/734451453ee78b0c97b047871a3f5e35",
            "publishedAt": "2023-06-30T01:02:00Z",
            "content": "A federal judge rejected former President Donald Trumps effort to dismiss writer E. Jean Carrolls defamation suit against him on Thursday, saying his claims of absolute presidential immunity were not… [+3100 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Virgin Galactic successfully completes its first commercial spaceflight - CBS News",
            "description": "The commercial space race is heating up. Virgin Galactic successfully completed its first flight with paying customers Thursday. Danya Bacchus has more.#news...",
            "url": "https://www.youtube.com/watch?v=OcIMu8DYShc",
            "urlToImage": "https://i.ytimg.com/vi/OcIMu8DYShc/maxresdefault.jpg",
            "publishedAt": "2023-06-30T00:58:51Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Chicago Tribune"
            },
            "author": "Phil Thompson",
            "title": "2023 NHL draft: Chicago Blackhawks select 11 players - Chicago Tribune",
            "description": "Day 2 of the NHL draft seemed like it flew by, and let’s just say the Blackhawks went with that theme. They used their nine Day 2 draft picks to add speed and more speed.",
            "url": "https://www.chicagotribune.com/sports/blackhawks/ct-chicago-blackhawks-nhl-draft-20230629-267uritcq5fmznvdzu6quweutu-story.html",
            "urlToImage": "https://www.chicagotribune.com/resizer/4dxWceP5gaMj6tlVJGAFOTITJ9A=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/AQETYUIJE4QEPEWP3IH5E4CYWI.jpg",
            "publishedAt": "2023-06-30T00:49:56Z",
            "content": "NASHVILLE — Day 2 of the NHL draft seemed like it flew by, and lets just say the Blackhawks went with that theme.\r\nThey ended up with nine draft picks in their arsenal Thursday including three second… [+14971 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "The Summer I Turned Pretty Season 2 - Official Trailer | Prime Video - Prime Video",
            "description": "Belly used to count down the days until she could return to Cousins Beach, but with Conrad and Jeremiah fighting over her heart and the return of Susannah's ...",
            "url": "https://www.youtube.com/watch?v=AOPE3mvYjRk",
            "urlToImage": "https://i.ytimg.com/vi/AOPE3mvYjRk/maxresdefault.jpg",
            "publishedAt": "2023-06-30T00:34:02Z",
            "content": null
        }
    ]
    constructor(){
        super();
        this.state={
            articles: this.articles,
            loading: false,
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e7ee060733dd4af19a1a658279c90e6f";
        let data = await fetch(url);
        let parseData = await data.json();
    }
  render() {
    return (
      <div className="container my-3 mx-auto">
        <h2 className="text-3xl font-bold text-center">NewsGorilla - Top Headlines</h2>
        <div className="my-4 mx-2 flex flex-wrap items-center justify-between ">
            {
                this.state.articles.map((element,i)=>{
                    return <NewsItem key={i} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                })
            }
        </div>
      </div>
    )
  }
}

export default News
