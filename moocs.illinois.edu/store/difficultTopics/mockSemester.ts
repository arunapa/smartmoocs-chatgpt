import { ISemester, Session } from "./types";

export const mockSemesters: ISemester[] = [
  {
    id: 1629723573703,
    term: "fall",
    session: Session.C,
    start_date: "2020",
    end_date: "2020",
    courses: [
      {
        id: 0,
        name: "Text Retrieval",
        slug: "textretrieval",
        description:
          "Natural language processing as it applies to retrieving text",
        topics: [
          {
            id: 0,
            name: "",
            description: {
              relev: 0.14514568195961225,
              key: 0.14268122348704135,
              measur: 0.1287534239192834,
              retriev: 0.12026383499972451,
              document: 0.1112576961889971,
              result: 0.0937010467126936,
              map: 0.08314238598733328,
              valu: 0.08313512979922205,
              can: 0.08061262182176127,
              precis: 0.0774567846757168,
            },
            difficulty: 0.14612700955042554,
          },
          {
            id: 1,
            name: "",
            description: {
              rank: 0.1939677768846329,
              can: 0.1916927000246899,
              invert: 0.1832552990237914,
              index: 0.1738900544868507,
              process: 0.14740198172948685,
              techniqu: 0.12475606057702175,
              data: 0.12386880314948204,
              time: 0.11875269869436746,
              reciproc: 0.11075498053557882,
              save: 0.11075498053557882,
            },
            difficulty: 0.1384547040472805,
          },
          {
            id: 2,
            name: "",
            description: {
              see: 0.15710279377563596,
              smooth: 0.12744826075269447,
              paramet: 0.12066466929303221,
              lambda: 0.1174830949629625,
              document: 0.09178455675046075,
              length: 0.0916690538030232,
              can: 0.08950369417052625,
              look: 0.08134244149390955,
              probabl: 0.07635944366356942,
              model: 0.07455802016329899,
            },
            difficulty: 0.1380586656691902,
          },
          {
            id: 3,
            name: "",
            description: {
              model: 0.41384760059856357,
              languag: 0.2106121381205938,
              comput: 0.19469576965851912,
              design: 0.10211682778944932,
              first: 0.07570203550577045,
              process: 0.07467400451267842,
              feedback: 0.07203252528431053,
              research: 0.07196503219244318,
              go: 0.05968051875212431,
              support: 0.058930277434042576,
            },
            difficulty: 0.13084122011112873,
          },
          {
            id: 4,
            name: "",
            description: {
              word: 0.3714964109012745,
              document: 0.24689618622664403,
              sum: 0.24527198731729527,
              queri: 0.24356267478125485,
              match: 0.17434121947340644,
              long: 0.0949749801841538,
              term: 0.07621492310099989,
              penal: 0.06531777408365397,
              occur: 0.05667293297263179,
              rank: 0.05478262197983026,
            },
            difficulty: 0.13466474503923595,
          },
          {
            id: 5,
            name: "",
            description: {
              document: 0.10674841347277823,
              measur: 0.09220493873044677,
              function: 0.09111252080900989,
              lectur: 0.07899754258860735,
              model: 0.07230762883602483,
              precis: 0.07050150727579252,
              averag: 0.06961537227367151,
              variabl: 0.06544175751636777,
              log: 0.06496148856575543,
              retriev: 0.06482960854554322,
            },
            difficulty: 0.13918439269350935,
          },
          {
            id: 6,
            name: "",
            description: {
              inform: 0.22080428983390119,
              queri: 0.17612335376724975,
              score: 0.1694393976079358,
              pull: 0.13681295628570359,
              text: 0.10390657133890631,
              push: 0.1008087086494814,
              system: 0.09862361288217053,
              access: 0.09840736389641969,
              retriev: 0.09238807835406185,
              two: 0.09214794387875568,
            },
            difficulty: 0.1377318090191916,
          },
          {
            id: 7,
            name: "",
            description: {
              word: 0.20589530136876655,
              can: 0.16271111822620668,
              understand: 0.12260866085007606,
              comput: 0.11470423437124792,
              sequenc: 0.10914111902665495,
              rate: 0.10217721924277597,
              chase: 0.09495317377731531,
              dog: 0.09447290482670297,
              infer: 0.0908708876971104,
              sentenc: 0.087509005042824,
            },
            difficulty: 0.13314723796363473,
          },
          {
            id: 8,
            name: "",
            description: {
              vector: 0.2216619650953579,
              model: 0.1596838178424504,
              word: 0.1592270015157533,
              space: 0.11011057912176044,
              also: 0.10703573619061071,
              differ: 0.10485107328893992,
              queri: 0.103468897996891,
              function: 0.07264960097399768,
              two: 0.06470171066497876,
              similar: 0.06203677881269563,
            },
            difficulty: 0.13381240593145308,
          },
          {
            id: 9,
            name: "",
            description: {
              page: 0.32349136036016013,
              point: 0.23830581787907937,
              random: 0.22702727207126555,
              threshold: 0.20879260101114905,
              link: 0.2015885667519639,
              util: 0.18023214751286715,
              feedback: 0.11254532360283183,
              optim: 0.10223509022781897,
              surfer: 0.09191708232122986,
              reach: 0.09095654442000518,
            },
            difficulty: 0.13401285162779897,
          },
          {
            id: 10,
            name: "",
            description: {
              vector: 0.20407135312848368,
              model: 0.1300474607243471,
              want: 0.12463955424793985,
              can: 0.11627584618117855,
              centroid: 0.1084880703925906,
              well: 0.0972642240630363,
              talk: 0.08930854937301476,
              accumul: 0.08828553746195432,
              precis: 0.08615556418911666,
              exampl: 0.08258478406444196,
            },
            difficulty: 0.13333529534461588,
          },
          {
            id: 11,
            name: "",
            description: {
              user: 0.2883971280489104,
              actual: 0.15915629892592642,
              rate: 0.15503655759107332,
              item: 0.15455628864046098,
              similar: 0.12007826380670128,
              compar: 0.11513677943560068,
              method: 0.08853252248178013,
              object: 0.07979955631094529,
              recal: 0.07854821412924994,
              mani: 0.07652579871647157,
            },
            difficulty: 0.13501858524994448,
          },
          {
            id: 12,
            name: "",
            description: {
              vector: 0.2981859851710638,
              document: 0.1885044207834879,
              space: 0.13308206928193755,
              weight: 0.10538264323025993,
              queri: 0.0984304931454785,
              term: 0.08700032058727608,
              function: 0.08542741121572424,
              word: 0.08284582281470082,
              zero: 0.08152536878348104,
              one: 0.07809127443682429,
            },
            difficulty: 0.13369495630023223,
          },
          {
            id: 13,
            name: "",
            description: {
              case: 0.1613129462862595,
              d: 0.14039840776514528,
              term: 0.10579620415157928,
              let: 0.09977000309944768,
              two: 0.09810048135704313,
              document: 0.09031307868880328,
              one: 0.0899587483661106,
              differ: 0.08729442996826542,
              think: 0.08198863234205235,
              connect: 0.07451020485334507,
            },
            difficulty: 0.13348175922017824,
          },
          {
            id: 14,
            name: "",
            description: {
              model: 0.24781684972500267,
              queri: 0.1892761151063873,
              feedback: 0.14256754867062907,
              term: 0.12037777299866241,
              equat: 0.10376991838321027,
              author: 0.09498234674068082,
              languag: 0.09276905910683479,
              word: 0.09213255808795096,
              hub: 0.07764733793092808,
              score: 0.07677745320512018,
            },
            difficulty: 0.1362013838998253,
          },
          {
            id: 15,
            name: "",
            description: {
              d: 0.16625881922447983,
              algorithm: 0.16248241872591496,
              text: 0.15833438153937618,
              queri: 0.12416953493956595,
              score: 0.11105743025618144,
              process: 0.10934027817482543,
              inform: 0.10913635445373207,
              toolkit: 0.10498164686510153,
              help: 0.07938921986788786,
              techniqu: 0.07914908539258168,
            },
            difficulty: 0.1390660388217397,
          },
          {
            id: 16,
            name: "",
            description: {
              id: 0.2108274595481865,
              re: 0.15215531006642072,
              data: 0.13158520465127632,
              natur: 0.1278245125075639,
              explor: 0.1267846370992793,
              term: 0.12101928773780476,
              sort: 0.1113366931726244,
              process: 0.11093576172907198,
              text: 0.10605161276176221,
              order: 0.1012510452097652,
            },
            difficulty: 0.13859057868479355,
          },
          {
            id: 17,
            name: "",
            description: {
              code: 0.6426761203933341,
              gamma: 0.16066903009833353,
              unari: 0.16018876114772118,
              x: 0.13509232521341316,
              bit: 0.11215709955686069,
              use: 0.10844693151368054,
              mean: 0.10243403657177384,
              also: 0.10075786177425684,
              sentenc: 0.09402456340643164,
              uniform: 0.07997431333620751,
            },
            difficulty: 0.13680770724488114,
          },
          {
            id: 18,
            name: "",
            description: {
              function: 0.20140825597289672,
              line: 0.10995391734352034,
              vector: 0.10786045307010853,
              relev: 0.10721701976410249,
              defin: 0.09866759700413028,
              can: 0.09182074099780128,
              map: 0.09114645814972648,
              featur: 0.09018592024850179,
              valu: 0.08841878468587737,
              well: 0.0880154858551775,
            },
            difficulty: 0.13612574734348934,
          },
          {
            id: 19,
            name: "",
            description: {
              data: 0.37345936980523053,
              text: 0.15335099283505743,
              cours: 0.13421469511298423,
              bm: 0.13113017708521427,
              knowledg: 0.1292091012827649,
              item: 0.12584721862847847,
              field: 0.11387772501438016,
              lot: 0.11287995696194522,
              articl: 0.11123624578601228,
              assumpt: 0.09826898411947901,
            },
            difficulty: 0.1339951496143361,
          },
          {
            id: 20,
            name: "",
            description: {
              search: 0.2072065619905042,
              represent: 0.16679375538020594,
              like: 0.14309802963343685,
              brows: 0.12533545101046062,
              use: 0.12380231175072078,
              engin: 0.1222912901400223,
              equat: 0.10220495407252625,
              inform: 0.08595339706024849,
              around: 0.0855580879678585,
              exact: 0.08507781901724616,
            },
            difficulty: 0.13272615517113498,
          },
          {
            id: 21,
            name: "",
            description: {
              model: 0.1613169800536295,
              lectur: 0.14907546489259546,
              rank: 0.13531842665297325,
              function: 0.11713757967687466,
              user: 0.10420233304413624,
              go: 0.09998664374917118,
              re: 0.09981588242103545,
              similar: 0.09594171578234185,
              use: 0.06718960881319098,
              base: 0.06685342923650024,
            },
            difficulty: 0.13350637831845755,
          },
          {
            id: 22,
            name: "",
            description: {
              search: 0.2136250789870834,
              talk: 0.2018789345802298,
              engin: 0.18701104199439594,
              retriev: 0.15568371540851497,
              text: 0.14944021905055452,
              lectur: 0.14417770547696754,
              music: 0.1040051149598554,
              natur: 0.09608185538595213,
              first: 0.09403048990427527,
              process: 0.08108367312089079,
            },
            difficulty: 0.13402246174432747,
          },
          {
            id: 23,
            name: "",
            description: {
              differ: 0.23145376995533087,
              averag: 0.16549232938410882,
              precis: 0.15756789169900515,
              think: 0.1556632753302889,
              r: 0.15417309017725253,
              make: 0.12991950817132922,
              recal: 0.12460363084712722,
              rank: 0.11360682328424265,
              use: 0.10984696884800944,
              larg: 0.10632049185639197,
            },
            difficulty: 0.13482556485669578,
          },
          {
            id: 24,
            name: "",
            description: {
              logarithm: 0.231319012331116,
              cours: 0.1819503132280393,
              weight: 0.15707533060619214,
              tf: 0.14660841650271522,
              part: 0.1178912822759693,
              idf: 0.11717087885005079,
              see: 0.10568655289067141,
              number: 0.10564442403535455,
              precis: 0.10516415508474221,
              ll: 0.08365105511718142,
            },
            difficulty: 0.13328001402278078,
          },
          {
            id: 25,
            name: "",
            description: {
              score: 0.17573126217139282,
              may: 0.09603020324610624,
              space: 0.09537504011650914,
              idf: 0.09530979982018772,
              good: 0.09122751373998281,
              hub: 0.08828065973998732,
              author: 0.08707998736345647,
              vector: 0.08247301874629731,
              page: 0.07952616474630182,
              heurist: 0.0730869474993771,
            },
            difficulty: 0.133429423114349,
          },
          {
            id: 26,
            name: "",
            description: {
              document: 0.3923087529242877,
              relev: 0.1771102802847058,
              d: 0.1558236145650398,
              dcg: 0.12025289088276753,
              term: 0.11416422641752996,
              rate: 0.11136791529643919,
              vector: 0.11128261271385591,
              idf: 0.09884221460733754,
              weight: 0.08611508741611046,
              will: 0.07666454029658648,
            },
            difficulty: 0.13451815123955607,
          },
          {
            id: 27,
            name: "",
            description: {
              web: 0.09606736497584849,
              index: 0.09366602022278676,
              model: 0.0900919329639413,
              know: 0.0783963385967877,
              case: 0.07267539607755394,
              better: 0.06730786784458948,
              document: 0.0634082961702218,
              lectur: 0.061925984594257785,
              use: 0.05801283806651024,
              b: 0.056939800518309755,
            },
            difficulty: 0.13511698366462604,
          },
          {
            id: 28,
            name: "",
            description: {
              user: 0.19382863117943,
              system: 0.14573738635683917,
              relev: 0.11314484259333377,
              search: 0.09655411387675575,
              data: 0.09646691907816964,
              text: 0.07476762150202808,
              can: 0.06965765752568714,
              better: 0.06673453909788611,
              hand: 0.05863571181561022,
              actual: 0.057783818633423835,
            },
            difficulty: 0.13517996197636445,
          },
          {
            id: 29,
            name: "",
            description: {
              inform: 0.09897956648826771,
              approach: 0.09466542643190516,
              improv: 0.09298448510476195,
              score: 0.08977717176791397,
              learn: 0.08330182143379589,
              use: 0.08279671098573792,
              talk: 0.08033464257225408,
              system: 0.07224735507056346,
              search: 0.06640684300449613,
              can: 0.06428979538886563,
            },
            difficulty: 0.13562684296271282,
          },
          {
            id: 30,
            name: "",
            description: {
              can: 0.16096286647795494,
              featur: 0.1493693033755469,
              just: 0.1251464456459254,
              one: 0.11701259776181734,
              sentenc: 0.11256728010109907,
              gener: 0.10302334964145579,
              file: 0.0928455288496912,
              comput: 0.08207020173721528,
              valu: 0.08158993278660294,
              q: 0.07408431549950802,
            },
            difficulty: 0.1343099879001698,
          },
          {
            id: 31,
            name: "",
            description: {
              system: 0.22916974920096672,
              document: 0.2226764159646574,
              user: 0.15396925308475778,
              recommend: 0.1152164403985424,
              will: 0.10750808331453493,
              relev: 0.10472733417582535,
              good: 0.09514600903778846,
              inform: 0.09326333858071632,
              mani: 0.08712070678772034,
              averag: 0.08251974641152582,
            },
            difficulty: 0.1353486992722638,
          },
          {
            id: 32,
            name: "",
            description: {
              exampl: 0.14072638572337354,
              way: 0.13528249503932732,
              mean: 0.1271179228789175,
              java: 0.10334208209228748,
              sentenc: 0.09661831678371469,
              product: 0.09181562727759125,
              search: 0.09141708830629364,
              think: 0.08717386999877828,
              applet: 0.0832499884145648,
              paper: 0.07508541625415498,
            },
            difficulty: 0.13453042278445634,
          },
          {
            id: 33,
            name: "",
            description: {
              index: 0.12708289574492546,
              can: 0.11687537502204243,
              search: 0.11322159958448913,
              document: 0.10970459246651809,
              use: 0.10813815134971827,
              data: 0.08643366601086083,
              web: 0.08249175929497964,
              larg: 0.08125783521478797,
              techniqu: 0.07789595256050157,
              small: 0.07185933897418646,
            },
            difficulty: 0.1360294057619895,
          },
          {
            id: 34,
            name: "",
            description: {
              document: 0.22978635025905772,
              id: 0.17195318698859713,
              count: 0.15586417714308365,
              function: 0.1509688143807134,
              word: 0.14596251570782554,
              reduc: 0.10490088041536272,
              key: 0.08868267200506072,
              togeth: 0.07774742205149449,
              got: 0.07606648072435128,
              decod: 0.07017405475221465,
            },
            difficulty: 0.1362914522511918,
          },
          {
            id: 35,
            name: "",
            description: {
              word: 0.3389128772646807,
              probabl: 0.20745742244737175,
              model: 0.17196906231881548,
              observ: 0.12128429902941495,
              d: 0.11517785271324643,
              presidenti: 0.10884884853025115,
              match: 0.09679058254818546,
              document: 0.09232992434220137,
              assign: 0.0842180820072297,
              zero: 0.08344613636455407,
            },
            difficulty: 0.13560950852367795,
          },
          {
            id: 36,
            name: "",
            description: {
              page: 0.14932951041171647,
              user: 0.12905797817348288,
              problem: 0.12866472491862713,
              d: 0.10212325508891587,
              citat: 0.08816901428764073,
              link: 0.08781542288306078,
              ten: 0.08192551792968028,
              way: 0.07196654751285346,
              stop: 0.07051252004425783,
              two: 0.07017214925643647,
            },
            difficulty: 0.13525859374349264,
          },
          {
            id: 37,
            name: "",
            description: {
              valu: 0.22215791628652365,
              code: 0.12520798732805208,
              dcg: 0.11784162831010848,
              paper: 0.09558693182318226,
              can: 0.09401062151523876,
              judgment: 0.08221721092258437,
              observ: 0.07501317666339923,
              much: 0.07285196638564369,
              right: 0.07189813381008199,
              three: 0.06876968030543877,
            },
            difficulty: 0.13456483084233647,
          },
          {
            id: 38,
            name: "",
            description: {
              probabl: 0.2579682849542559,
              word: 0.18368136571992785,
              model: 0.14498061666148926,
              comput: 0.12706306667467857,
              see: 0.09691462306611001,
              can: 0.09280203377418594,
              relat: 0.08860245209154617,
              unseen: 0.07829980356866882,
              queri: 0.07730896245572498,
              condit: 0.061993793163137204,
            },
            difficulty: 0.135124625516437,
          },
          {
            id: 39,
            name: "",
            description: {
              d: 0.19257460869816423,
              new: 0.16724373167770948,
              queri: 0.1448462266688895,
              match: 0.12867295911274226,
              weight: 0.12324074414002671,
              term: 0.10970233556355471,
              vector: 0.10682072185988065,
              file: 0.09709858573432703,
              also: 0.08136646747742647,
              form: 0.07077467140997457,
            },
            difficulty: 0.1354105122910115,
          },
          {
            id: 40,
            name: "",
            description: {
              learn: 0.12036479797685334,
              lectur: 0.1153517300278005,
              web: 0.1025650907718199,
              machin: 0.08857777913930842,
              system: 0.0759399200452116,
              featur: 0.07005766850835646,
              whether: 0.06933726508243795,
              talk: 0.06771583582004827,
              search: 0.06750545737711885,
              algorithm: 0.06621551690345771,
            },
            difficulty: 0.1354545334933909,
          },
          {
            id: 41,
            name: "",
            description: {
              queri: 0.2556724251129766,
              document: 0.24318496971020537,
              term: 0.1639419809197197,
              zero: 0.11831689329839741,
              function: 0.1174933107048618,
              product: 0.10215940579903939,
              comput: 0.09958640422451603,
              probabl: 0.09896871727936432,
              deliv: 0.08720259067621222,
              assumpt: 0.08603615712660363,
            },
            difficulty: 0.1347227037763605,
          },
          {
            id: 42,
            name: "",
            description: {
              probabl: 0.2166542030660458,
              model: 0.11038619983355064,
              relev: 0.09919253412047735,
              text: 0.09815825629475795,
              d: 0.08895940630862874,
              evalu: 0.08761125408310848,
              filter: 0.07168863878840645,
              risk: 0.0670523438330945,
              determin: 0.06513126803064512,
              summar: 0.06200951985166489,
            },
            difficulty: 0.13426029385345462,
          },
          {
            id: 43,
            name: "",
            description: {
              document: 0.18314172479062196,
              word: 0.16213168793302196,
              featur: 0.10697817901720942,
              text: 0.09307996382594225,
              collect: 0.08463088062549008,
              case: 0.0800979099711636,
              valu: 0.07960284883230587,
              comput: 0.06517998812569019,
              distribut: 0.06346946242205621,
              occur: 0.060827983193688324,
            },
            difficulty: 0.1341905837800808,
          },
          {
            id: 44,
            name: "",
            description: {
              k: 0.1509634162681804,
              need: 0.12358808608327686,
              inform: 0.11038068994143743,
              function: 0.10412907671353683,
              part: 0.09551670308227524,
              system: 0.09477194904653628,
              pool: 0.09144253387201047,
              transform: 0.08135688590915126,
              lectur: 0.07366446582941363,
              plu: 0.07344056509398775,
            },
            difficulty: 0.13376708613390387,
          },
          {
            id: 45,
            name: "",
            description: {
              like: 0.18279857409804667,
              text: 0.13801418449504138,
              filter: 0.13693426939775932,
              look: 0.11238017427690543,
              user: 0.10433497931255298,
              can: 0.09905064077262578,
              paper: 0.09863351062802067,
              might: 0.0959316527600284,
              data: 0.08416506347002599,
              similar: 0.08062342498005781,
            },
            difficulty: 0.13316824098669724,
          },
          {
            id: 46,
            name: "",
            description: {
              document: 0.31132239128883343,
              word: 0.27112908719078765,
              model: 0.1701893314004401,
              probabl: 0.12163674402763588,
              user: 0.11949824543035913,
              rank: 0.10192300537205104,
              assum: 0.085563578810593,
              re: 0.08437804755438133,
              estim: 0.08050561370884421,
              languag: 0.07835954455140785,
            },
            difficulty: 0.133357210145427,
          },
          {
            id: 47,
            name: "",
            description: {
              user: 0.31040289813560357,
              system: 0.14112658569405953,
              better: 0.11449582086373093,
              task: 0.10315550738767844,
              might: 0.10152855919719767,
              structur: 0.09421653866468765,
              sentenc: 0.09253559733754445,
              reason: 0.09013425258448274,
              need: 0.08562569069032791,
              measur: 0.07884793224509268,
            },
            difficulty: 0.1327863330541522,
          },
          {
            id: 48,
            name: "",
            description: {
              search: 0.2291363865519077,
              engin: 0.21001058838563635,
              user: 0.1629405449507865,
              text: 0.14141708830629365,
              data: 0.13029331513366785,
              cover: 0.11076852160016629,
              system: 0.1032393930074526,
              relev: 0.09243334161867489,
              evalu: 0.083555738582027,
              read: 0.08027512951112273,
            },
            difficulty: 0.13308149537328226,
          },
          {
            id: 49,
            name: "",
            description: {
              word: 0.2924089169521496,
              topic: 0.16118752599647018,
              lot: 0.15422362621259122,
              ambigu: 0.15071633913441143,
              abstract: 0.12607721822928852,
              concept: 0.12607721822928852,
              t: 0.10172890617195243,
              think: 0.0900570469333628,
              right: 0.08732083765358215,
              imagin: 0.08150693587375339,
            },
            difficulty: 0.13217043449216692,
          },
        ],
        lectures: [
          {
            id: 0,
            active: true,
            name: "Lesson 0.1",
            slug: "0-1",
            description: "Course Welcome Video",
            videoUrl: "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+0.1+Course+Welcome+Video.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/MsDCs/course-introduction-video",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.120000",
                heat: 1.0781560636182903,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.110000",
                heat: 0.8512673956262425,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.290000",
                heat: 1.4916749502982107,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 0.2",
            slug: "0-2",
            description: "Course Introduction Video",
            videoUrl: "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+0.2+Course+Introduction+Video.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/MsDCs/course-introduction-video",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.109000",
                heat: 0.7661870503597122,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.200000",
                heat: 0.5752997601918465,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.965000",
                heat: 0.49928057553956834,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.450000",
                heat: 0.4275779376498801,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.975000",
                heat: 0.5378896882494005,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.530000",
                heat: 0.497841726618705,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.570000",
                heat: 0.5,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.250000",
                heat: 0.5916067146282974,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.853000",
                heat: 0.7179856115107913,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.240000",
                heat: 0.3925659472422062,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.410000",
                heat: 0.5107913669064749,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 1.1",
            slug: "1-1",
            description: "Natural Language Content Analysis",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+1.1+Natural+Language+Content+Analysis.mp4",
            courseraUrl: "",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.0990161853379878,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.660000",
                heat: 0.9907965725166614,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.210000",
                heat: 0.5636305934623929,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.040000",
                heat: 0.5104728657569025,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.280000",
                heat: 0.5017454776261504,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.890000",
                heat: 0.583941605839416,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.020000",
                heat: 0.5656934306569343,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.470000",
                heat: 0.5753728974928594,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.251000",
                heat: 0.4384322437321485,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.580000",
                heat: 0.4757219930180895,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.570000",
                heat: 0.41859727070771185,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.170000",
                heat: 0.42097746747064424,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.053000",
                heat: 0.3641701047286576,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.641000",
                heat: 0.39907965725166616,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.095000",
                heat: 0.45192002538876547,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:04.310000",
                heat: 0.353697238971755,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:01.384000",
                heat: 0.4509679466835925,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:03.440000",
                heat: 0.34766740717232625,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:01.970000",
                heat: 0.3145033322754681,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:19:01.530000",
                heat: 0.3335449063789273,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:20:01.100000",
                heat: 0.6758172008886068,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 1.2",
            slug: "1-2",
            description: "Text Access",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+1.2+Text+Access.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/OvxTu/lesson-1-2-text-access",
            buckets: [
              {
                id: 0,
                interval: "00:00:08.450000",
                heat: 0.8802541544477028,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.400000",
                heat: 1.013685239491691,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.760000",
                heat: 0.656158357771261,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.570000",
                heat: 0.6229227761485826,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.430000",
                heat: 0.7478005865102639,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 7.714367453948663e-18,
                  },
                  {
                    topicId: 2,
                    probability: 1.546452025535634e-33,
                  },
                  {
                    topicId: 3,
                    probability: 2.614240315611105e-28,
                  },
                  {
                    topicId: 4,
                    probability: 3.495616367865839e-26,
                  },
                  {
                    topicId: 5,
                    probability: 2.6827741653044275e-24,
                  },
                  {
                    topicId: 6,
                    probability: 1.965675442800114e-13,
                  },
                  {
                    topicId: 8,
                    probability: 4.5051126613383326e-29,
                  },
                  {
                    topicId: 9,
                    probability: 2.1558688862211818e-18,
                  },
                  {
                    topicId: 11,
                    probability: 1.969784095400385e-22,
                  },
                  {
                    topicId: 13,
                    probability: 2.2701389243032986e-20,
                  },
                  {
                    topicId: 14,
                    probability: 7.700449254237565e-33,
                  },
                  {
                    topicId: 15,
                    probability: 3.3091221487516702e-15,
                  },
                  {
                    topicId: 19,
                    probability: 2.0647129928937144e-20,
                  },
                  {
                    topicId: 21,
                    probability: 0.0000023359053237170556,
                  },
                  {
                    topicId: 22,
                    probability: 0.9999976640944673,
                  },
                  {
                    topicId: 29,
                    probability: 9.090915022169817e-15,
                  },
                  {
                    topicId: 31,
                    probability: 6.217993623751192e-29,
                  },
                  {
                    topicId: 32,
                    probability: 8.769771660101036e-22,
                  },
                  {
                    topicId: 35,
                    probability: 4.034670130263104e-27,
                  },
                  {
                    topicId: 37,
                    probability: 6.699766896908109e-25,
                  },
                  {
                    topicId: 40,
                    probability: 1.285336549275343e-28,
                  },
                  {
                    topicId: 42,
                    probability: 1.4743912233863159e-24,
                  },
                  {
                    topicId: 44,
                    probability: 7.223090664571743e-26,
                  },
                  {
                    topicId: 47,
                    probability: 1.445610859971967e-25,
                  },
                  {
                    topicId: 48,
                    probability: 9.347911203621953e-31,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.710000",
                heat: 0.7108993157380255,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:05.080000",
                heat: 0.7057673509286413,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.160000",
                heat: 0.5899315738025416,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.220000",
                heat: 0.7453567937438905,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.536000",
                heat: 0.45527859237536655,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 1.3",
            slug: "1-3",
            description: "Text Retrieval Problem",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+1.3+Text+Retrieval+Problem.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/CXoWB/lesson-1-3-text-retrieval-problem",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 0.8487347170884276,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.950000",
                heat: 0.7981234006255331,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.340000",
                heat: 0.5922661359112881,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:05.550000",
                heat: 0.528291157236281,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.870000",
                heat: 0.5100938299687233,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.673000",
                heat: 0.528291157236281,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.389000",
                heat: 0.641171452942849,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.460000",
                heat: 0.6980381006539664,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.573000",
                heat: 0.5635484788171737,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:04.370000",
                heat: 0.5095251634916121,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.070000",
                heat: 0.5245948251350583,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.115000",
                heat: 0.8018197327267558,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.330000",
                heat: 0.6027864657378448,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.510000",
                heat: 0.5371054876315041,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:03.440000",
                heat: 0.5868638043787319,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:02.700000",
                heat: 0.442138185953938,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:04.360000",
                heat: 0.5442138185953938,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:04.306000",
                heat: 0.4117145294284902,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:04.280000",
                heat: 0.4762581745806085,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:19:06.320000",
                heat: 0.5902758032413989,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:20:02.610000",
                heat: 0.5169178276940575,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:21:00.570000",
                heat: 0.5513221495592835,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:22:02.590000",
                heat: 0.40233153255615584,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:23:04.650000",
                heat: 0.34859255046914983,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:24:01.580000",
                heat: 0.43929485356838216,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:25:02.260000",
                heat: 0.491043502985499,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:26:02.409000",
                heat: 0.3221495592834802,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 1.4",
            slug: "1-4",
            description: "Overview of Text Retrieval Methods",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+1.4+Overview+of+Text+Retrieval+Methods.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/gxXq6/lesson-1-4-overview-of-text-retrieval-methods",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.1418253447143796,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.235000",
                heat: 1.1109652002626396,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.310000",
                heat: 1.0879842416283652,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.470000",
                heat: 1.097504924491136,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:06.120000",
                heat: 1.0022980958634276,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.300000",
                heat: 0.7337491792514773,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.928000",
                heat: 0.8214051214707814,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.118000",
                heat: 1.0443204202232437,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.285000",
                heat: 0.6621799080761654,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.130000",
                heat: 1.0387393302692056,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 1.5",
            slug: "1-5",
            description: "Vector Space Model - Basic Idea",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+1.5+Vector+Space+Model+-+Basic+Idea.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/o8WNd/lesson-1-5-vector-space-model-basic-idea",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.147758152173913,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.130000",
                heat: 0.9656929347826086,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.070000",
                heat: 0.7771739130434783,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.270000",
                heat: 0.6875,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:04.110000",
                heat: 0.8016304347826086,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.050000",
                heat: 0.9551630434782609,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:05.660000",
                heat: 0.7860054347826086,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.350000",
                heat: 0.8811141304347826,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.610000",
                heat: 0.8342391304347826,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.830000",
                heat: 0.7177309782608695,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 1.6",
            slug: "1-6",
            description:
              "Vector Space Retrieval Model - Simplest Instantiation",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+1.6+Vector+Space+Retrieval+Model+-+Simplest+Instantiation.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/dM6kh/lesson-1-6-vector-space-retrieval-model-simplest-instantiation",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.008000",
                heat: 0.972972972972973,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1.6318295513349717e-96,
                  },
                  {
                    topicId: 3,
                    probability: 6.606559863077029e-29,
                  },
                  {
                    topicId: 4,
                    probability: 7.440985102026049e-90,
                  },
                  {
                    topicId: 5,
                    probability: 4.431941671880825e-26,
                  },
                  {
                    topicId: 14,
                    probability: 1.3297763298441598e-28,
                  },
                  {
                    topicId: 19,
                    probability: 2.213500905619233e-31,
                  },
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.590000",
                heat: 0.7605105105105106,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.260000",
                heat: 0.6843093093093093,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.800000",
                heat: 1.1193693693693694,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:04.700000",
                heat: 0.7563813813813813,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.082000",
                heat: 0.8487237237237237,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.110000",
                heat: 0.7946696696696697,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.620000",
                heat: 0.7274774774774775,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.290000",
                heat: 0.728978978978979,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.450000",
                heat: 0.6963213213213213,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.780000",
                heat: 0.5773273273273273,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.570000",
                heat: 0.7094594594594594,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:04.400000",
                heat: 0.6636636636636637,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:03.820000",
                heat: 0.734984984984985,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:02.050000",
                heat: 0.6013513513513513,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:01.200000",
                heat: 0.7165915915915916,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:01.670000",
                heat: 0.6985735735735735,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:04.640000",
                heat: 0.41178678678678676,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 2.1",
            slug: "2-1",
            description: "Vector Space Model - Improved Instantiation",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+2.1+Vector+Space+Model+-+Improved+Instantiation.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/7jqJI/lesson-2-1-vector-space-model-improved-instantiation",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.0504135486411974,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.260000",
                heat: 0.8412760929499803,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.420000",
                heat: 0.8775108310358409,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.900000",
                heat: 0.8046474990153604,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.640000",
                heat: 0.985427333595904,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.170000",
                heat: 1.0299330445057109,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.022000",
                heat: 1.0015754233950374,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.720000",
                heat: 0.8471839306813707,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01",
                heat: 1.303662859393462,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:05.800000",
                heat: 1.4915320992516738,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.302000",
                heat: 1.840882237101221,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.760000",
                heat: 0.9574635683339897,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.980000",
                heat: 1.067743205986609,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.530000",
                heat: 1.067743205986609,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:01.250000",
                heat: 0.9291059472233163,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:01.128000",
                heat: 0.8558487593540764,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:01.184000",
                heat: 0.7526585269791256,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 2.2",
            slug: "2-2",
            description: "TF Transformation",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+2.2+TF+Transformation.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/W0NZe/lesson-2-2-tf-transformation",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.354000",
                heat: 1.2959183673469388,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.190000",
                heat: 1.5459183673469388,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.440000",
                heat: 1.1389324960753533,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.525000",
                heat: 0.8956043956043956,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.160000",
                heat: 1.3653846153846154,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.870000",
                heat: 1.3991365777080063,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.210000",
                heat: 1.5098116169544742,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.630000",
                heat: 1.2684458398744114,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.010000",
                heat: 1.4540816326530612,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.770000",
                heat: 0.7315541601255887,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 2.3",
            slug: "2-3",
            description: "Doc Length Normalization",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+2.3+Doc+Length+Normalization.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/RnXhr/lesson-2-3-doc-length-normalization",
            buckets: [
              {
                id: 0,
                interval: "00:00:08.412000",
                heat: 0.887906789875452,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.010000",
                heat: 0.8782643631980716,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.760000",
                heat: 1.0092406588991563,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.280000",
                heat: 0.9469666532744074,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.550000",
                heat: 1.286460425873845,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.280000",
                heat: 1.0385697067095219,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:05.050000",
                heat: 1.5813579750903977,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.190000",
                heat: 1.239453595821615,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.430000",
                heat: 1.3157894736842106,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.610000",
                heat: 1.1880273202089193,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.190000",
                heat: 0.8312575331458417,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.289000",
                heat: 0.6621132985134592,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.500000",
                heat: 0.8826838087585376,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.710000",
                heat: 0.8244274809160306,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.750000",
                heat: 0.778224186420249,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:02.150000",
                heat: 0.8292486942547208,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:02.820000",
                heat: 0.7320208919244676,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:05.583000",
                heat: 0.6870229007633588,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:01.440000",
                heat: 0.7717959019686621,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 2.4",
            slug: "2-4",
            description: "Implementation of TR Systems",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+2.4+Implementation+of+TR+Systems.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/2Cbq9/lesson-2-4-implementation-of-tr-systems",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.008000",
                heat: 1.72696502444528,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.092000",
                heat: 0.9620157954118089,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.920000",
                heat: 0.8781496803309515,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.516000",
                heat: 0.9714178262504701,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.020000",
                heat: 0.9364422715306506,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.035000",
                heat: 1.2485896953742008,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:07.920000",
                heat: 0.7484016547574276,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.860000",
                heat: 0.6288078224896577,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.745000",
                heat: 0.6190297104174501,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.060000",
                heat: 0.5705152312899586,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.540000",
                heat: 0.8616021060549078,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.700000",
                heat: 0.7510342233922527,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:00.120000",
                heat: 0.6949981195938323,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.420000",
                heat: 0.7781120722075968,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.320000",
                heat: 1.0218127115456939,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:03.880000",
                heat: 0.8973298232418202,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:02.525000",
                heat: 0.6667920270778488,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:01.900000",
                heat: 0.7220759684091764,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:05.478000",
                heat: 0.7028958254983076,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:19:03.619000",
                heat: 0.5701391500564121,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:20:01.649000",
                heat: 0.5814215870628056,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:21:03.705000",
                heat: 0.39601353892440766,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 2.5",
            slug: "2-5",
            description: "System Implementation - Inverted Index Construction",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+2.5+System+Implementation+-+Inverted+Index+Construction.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/PgzsP/lesson-2-5-system-implementation-inverted-index-construction",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.6521946564885497,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.725000",
                heat: 2.032442748091603,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:05.957000",
                heat: 1.2633587786259541,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.280000",
                heat: 1.284351145038168,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.920000",
                heat: 1.683206106870229,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:05.981000",
                heat: 1.6708015267175573,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.650000",
                heat: 1.4198473282442747,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:05.580000",
                heat: 1.4708969465648856,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.040000",
                heat: 1.3225190839694656,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.180000",
                heat: 1.6760496183206106,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.200000",
                heat: 0.9942748091603053,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.259000",
                heat: 1.2108778625954197,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.530000",
                heat: 1.1817748091603053,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.120000",
                heat: 1.5648854961832062,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:01.460000",
                heat: 1.7185114503816794,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:03.330000",
                heat: 1.1999045801526718,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:01.390000",
                heat: 1.508587786259542,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:02.920000",
                heat: 1.3010496183206106,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:04.438000",
                heat: 0.3916984732824427,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 2.6",
            slug: "2-6",
            description: "System Implementation - Fast Search",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+2.6+System+Implementation+-+Fast+Search.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/QKK7y/lesson-2-6-system-implementation-fast-search",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.5914477073673363,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.876000",
                heat: 0.9623905203503349,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.131000",
                heat: 1.2251416795466255,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.360000",
                heat: 1.6110252447192168,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.780000",
                heat: 1.3132405976300876,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.760000",
                heat: 1.244719216898506,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.270000",
                heat: 1.0051519835136526,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.910000",
                heat: 0.7511591962905718,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.080000",
                heat: 0.824317362184441,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.930000",
                heat: 0.9335394126738794,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.920000",
                heat: 1.0432766615146831,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.560000",
                heat: 0.8562596599690881,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.250000",
                heat: 0.794435857805255,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.200000",
                heat: 0.8469860896445132,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.442000",
                heat: 0.7604327666151468,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:06.720000",
                heat: 0.764554353426069,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:03.870000",
                heat: 0.9021123132405976,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 3.1",
            slug: "3-1",
            description: "Evaluation of TR Systems",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+3.1+Evaluation+of+TR+Systems.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/YSvkh/lesson-3-1-evaluation-of-tr-systems",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.153621495327103,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.170000",
                heat: 0.7762850467289719,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.670000",
                heat: 0.8411214953271028,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.970000",
                heat: 0.9077102803738317,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.810000",
                heat: 0.830607476635514,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.240000",
                heat: 0.7348130841121495,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.930000",
                heat: 0.8008177570093458,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.600000",
                heat: 0.7593457943925234,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.310000",
                heat: 0.7383177570093458,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:04.160000",
                heat: 1.0718457943925233,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 3.2",
            slug: "3-2",
            description: "Evaluation of TR Systems - Basic Measures",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+3.2+Evaluation+of+TR+Systems+-+Basic+Measures.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/VMh3Z/lesson-3-2-evaluation-of-tr-systems-basic-measures",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.2117437722419928,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.318000",
                heat: 0.9673784104389087,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.240000",
                heat: 1.5788849347568208,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.130000",
                heat: 1.6008303677342823,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.740000",
                heat: 0.9833926453143536,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.200000",
                heat: 1.0569395017793595,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.790000",
                heat: 1.365361803084223,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.460000",
                heat: 1.3220640569395017,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.990000",
                heat: 0.9916963226571768,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.870000",
                heat: 1.1126927639383155,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.300000",
                heat: 0.8991696322657177,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.170000",
                heat: 0.8558718861209964,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.029000",
                heat: 0.8944246737841044,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 3.3",
            slug: "3-3",
            description:
              "Evaluation of TR Systems - Evaluating Ranked Lists - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+3.3+Evaluation+of+TR+Systems+-+Evaluating+Ranked+Lists+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/rU7LT/lesson-3-3-evaluation-of-tr-systems-evaluating-ranked-lists-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.199000",
                heat: 1.2248062015503876,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.097000",
                heat: 0.9296362552176506,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.920000",
                heat: 0.8723911747167561,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.473000",
                heat: 1.1174716756112104,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:05.230000",
                heat: 0.8580799045915325,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.130000",
                heat: 0.8330351818723912,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.040000",
                heat: 0.9344066785927251,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.500000",
                heat: 0.9367918902802623,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:05.630000",
                heat: 0.8509242695289206,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:04.615000",
                heat: 0.8497316636851521,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.320000",
                heat: 1.0757304710793083,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.258000",
                heat: 1.4239713774597496,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:04.511000",
                heat: 1.1890280262373285,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:02.720000",
                heat: 1.0125223613595706,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:02.190000",
                heat: 0.998211091234347,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:02.200000",
                heat: 0.9260584376863447,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 3.4",
            slug: "3-4",
            description:
              "Evaluation of TR Systems - Evaluating Ranked Lists - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+3.4+Evaluation+of+TR+Systems+-+Evaluating+Ranked+Lists+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/8Q2Tw/lesson-3-4-evaluation-of-tr-systems-evaluating-ranked-lists-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.7085678549093184,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02",
                heat: 1.0231394621638523,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.820000",
                heat: 1.0531582238899313,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.620000",
                heat: 1.549718574108818,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.890000",
                heat: 1.2883051907442151,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.330000",
                heat: 1.0300187617260788,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.070000",
                heat: 0.7385866166353972,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.070000",
                heat: 0.8217636022514071,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.350000",
                heat: 0.8530331457160726,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.370000",
                heat: 1.1794871794871795,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 3.5",
            slug: "3-5",
            description: "Evaluation of TR Systems - Multi-Level Judgements",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+3.5+Evaluation+of+TR+Systems+-+Multi-Level+Judgements.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/uGa00/lesson-3-5-evaluation-of-tr-systems-multi-level-judgements",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 0.9876783398184177,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.480000",
                heat: 0.8184176394293126,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.380000",
                heat: 0.7736705577172504,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.705000",
                heat: 0.6958495460440985,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.720000",
                heat: 0.6945525291828794,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.270000",
                heat: 0.6932555123216602,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.440000",
                heat: 0.7230869001297017,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.580000",
                heat: 0.7496757457846952,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.650000",
                heat: 0.7198443579766537,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.660000",
                heat: 0.8780804150453956,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.140000",
                heat: 0.9020752269779507,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 3.6",
            slug: "3-6",
            description: "Evaluation of TR Systems - Practical Issues",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+3.6+Evaluation+of+TR+Systems+-+Practical+Issues.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/thRNy/lesson-3-6-evaluation-of-tr-systems-practical-issues",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.104000",
                heat: 0.9905723905723905,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.560000",
                heat: 0.705050505050505,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.810000",
                heat: 0.9185185185185185,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.080000",
                heat: 0.5575757575757576,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.120000",
                heat: 0.4707070707070707,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.020000",
                heat: 0.7373737373737373,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.260000",
                heat: 0.6087542087542087,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.310000",
                heat: 0.6760942760942761,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.010000",
                heat: 0.6848484848484848,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.870000",
                heat: 0.7622895622895622,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.702000",
                heat: 0.6188552188552189,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.430000",
                heat: 0.5865319865319866,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.056000",
                heat: 0.6922558922558922,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 4.639916583893467e-161,
                  },
                  {
                    topicId: 4,
                    probability: 1.5947050438184905e-91,
                  },
                  {
                    topicId: 14,
                    probability: 1.1156863758132214e-155,
                  },
                  {
                    topicId: 21,
                    probability: 1,
                  },
                  {
                    topicId: 42,
                    probability: 7.439378530998783e-133,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:03.465000",
                heat: 0.6585858585858586,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:02.080000",
                heat: 0.564983164983165,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:02.380000",
                heat: 0.2915824915824916,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 4.1",
            slug: "4-1",
            description: "Probabilistic Retrieval Model - Basic Idea",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+4.1+Probabilistic+Retrieval+Model+-+Basic+Idea.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/nkg5n/lesson-4-1-probabilistic-retrieval-model-basic-idea",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.6004250797024442,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.586000",
                heat: 0.9686503719447397,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.881000",
                heat: 1.332624867162593,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.756000",
                heat: 0.6907545164718385,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.420000",
                heat: 0.524442082890542,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.271000",
                heat: 0.9017003188097769,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.246000",
                heat: 0.6854410201912858,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.702000",
                heat: 0.7497343251859724,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.780000",
                heat: 0.8352816153028693,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.378000",
                heat: 0.8464399574920297,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:04.816000",
                heat: 0.80605738575983,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.045000",
                heat: 0.7151965993623804,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.878000",
                heat: 0.5866099893730075,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 5.3",
            slug: "5-3",
            description: "Feedback in Text Retrieval - Feedback in LM",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+5.3+Feedback+in+Text+Retrieval+-+Feedback+in+LM.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/M7ylk/lesson-5-3-feedback-in-text-retrieval-feedback-in-lm",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.8628912071535022,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.170000",
                heat: 1.6169895678092399,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:05.087000",
                heat: 1.3949329359165425,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.935000",
                heat: 1.1609538002980626,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.340000",
                heat: 1.399403874813711,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.480000",
                heat: 1.3658718330849478,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.490000",
                heat: 1.8412816691505216,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.490000",
                heat: 1.2280178837555886,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.610000",
                heat: 0.7287630402384501,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.430000",
                heat: 0.6661698956780924,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.250000",
                heat: 0.7019374068554396,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.920000",
                heat: 0.6713859910581222,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                  {
                    topicId: 8,
                    probability: 6.298617540302398e-130,
                  },
                  {
                    topicId: 31,
                    probability: 9.100333184877598e-127,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.136000",
                heat: 0.7921013412816692,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.553000",
                heat: 0.7414307004470939,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:02.460000",
                heat: 1.1251862891207154,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:03.760000",
                heat: 0.7436661698956781,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:05.280000",
                heat: 0.6922503725782414,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:03.062000",
                heat: 0.8822652757078987,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:02.010000",
                heat: 0.7950819672131147,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 4.2",
            slug: "4-2",
            description: "Statistical Language Model",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+4.2+Statistical+Language+Model.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/kv4Aj/lesson-4-2-statistical-language-model",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.4615384615384615,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.310000",
                heat: 1.0723598435462842,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:05.340000",
                heat: 0.9856584093872229,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.820000",
                heat: 1.257496740547588,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.180000",
                heat: 1.361799217731421,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.270000",
                heat: 1.2027379400260756,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.850000",
                heat: 1.2985658409387224,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.880000",
                heat: 0.9172099087353325,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:05.030000",
                heat: 1.1095176010430248,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.754000",
                heat: 1.3728813559322033,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.830000",
                heat: 1.063233376792699,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.753000",
                heat: 0.9204693611473272,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.100000",
                heat: 0.711864406779661,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.830000",
                heat: 1.0052151238591918,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:03.230000",
                heat: 0.6590612777053455,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:00.020000",
                heat: 0.7698826597131682,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:02.900000",
                heat: 0.7744458930899609,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:00.130000",
                heat: 0.7242503259452412,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 4.3",
            slug: "4-3",
            description: "Query Likelihood Retrieval Function",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+4.3+Query+Likelihood+Retrieval+Function.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/BWexZ/lesson-4-3-query-likelihood-retrieval-function",
            buckets: [
              {
                id: 0,
                interval: "00:00:07.880000",
                heat: 1.1671328671328671,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.060000",
                heat: 0.8398601398601399,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.820000",
                heat: 1.020979020979021,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.440000",
                heat: 1.0076923076923077,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.125000",
                heat: 1.0426573426573427,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.500000",
                heat: 0.7692307692307693,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.040000",
                heat: 1.3650349650349651,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.560000",
                heat: 1.2188811188811188,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01",
                heat: 1.6181818181818182,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.130000",
                heat: 1.1349650349650349,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.620000",
                heat: 0.9279720279720279,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 5.655798150493306e-31,
                  },
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.080000",
                heat: 1.4825174825174825,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 4.4",
            slug: "4-4",
            description: "Statistical Language Model - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+4.4+Statistical+Language+Model+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/f4CYl/lesson-4-4-statistical-language-model-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:07.170000",
                heat: 1.179083094555874,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.110000",
                heat: 1.1712034383954155,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.110000",
                heat: 1.0659025787965617,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.970000",
                heat: 0.8560171919770774,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.030000",
                heat: 0.8839541547277937,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.730000",
                heat: 1.1002865329512894,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.390000",
                heat: 1.174785100286533,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.310000",
                heat: 0.8488538681948424,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.230000",
                heat: 0.8273638968481375,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.050000",
                heat: 0.997134670487106,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:05.880000",
                heat: 0.9520057306590258,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:04.340000",
                heat: 2.0888252148997135,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.837000",
                heat: 0.37106017191977075,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 4.5",
            slug: "4-5",
            description: "Statistical Language Model - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+4.5+Statistical+Language+Model+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/hI1vE/lesson-4-5-statistical-language-model-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.006000",
                heat: 1.6949280847842543,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.940000",
                heat: 1.0537471612414837,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.980000",
                heat: 1.060560181680545,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.640000",
                heat: 0.9288417865253595,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.460000",
                heat: 1.1309613928841786,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.260000",
                heat: 0.9848599545798638,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:05.570000",
                heat: 0.7040121120363361,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.950000",
                heat: 0.8667676003028009,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.600000",
                heat: 0.7501892505677517,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.590000",
                heat: 0.5783497350492052,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 4.6",
            slug: "4-6",
            description: "Smoothing Methods - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+4.6+Smoothing+Methods+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/kM6Ie/lesson-4-6-smoothing-methods-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.7744082840236686,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.700000",
                heat: 1.8187869822485208,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.170000",
                heat: 1.9326923076923077,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.200000",
                heat: 2.529585798816568,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.785000",
                heat: 2.600591715976331,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.955000",
                heat: 2.4008875739644973,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:05.780000",
                heat: 1.1405325443786982,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.800000",
                heat: 1.1153846153846154,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.540000",
                heat: 1.2492603550295858,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03",
                heat: 1.66198224852071,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 4.7",
            slug: "4-7",
            description: "Smoothing Methods - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+4.7+Smoothing+Methods+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/gxNMo/lesson-4-7-smoothing-methods-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.006000",
                heat: 1.6019629225736096,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.666000",
                heat: 1.4023991275899672,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.520000",
                heat: 1.1406761177753544,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.996000",
                heat: 1.1504907306434025,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.940000",
                heat: 1.2551799345692476,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.280000",
                heat: 1.5517993456924755,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.660000",
                heat: 1.1199563794983642,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.510000",
                heat: 1.0174482006543075,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.037000",
                heat: 1.0130861504907307,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.935000",
                heat: 1.2529989094874592,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:05.940000",
                heat: 0.7153762268266085,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:04.020000",
                heat: 0.7589967284623773,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.090000",
                heat: 0.9018538713195202,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:04.921000",
                heat: 0.2268266085059978,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 5.1",
            slug: "5-1",
            description: "Feedback in Text Retrieval",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+5.1+Feedback+in+Text+Retrieval.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/gw3fo/lesson-5-1-feedback-in-text-retrieval",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.3683823529411765,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.753000",
                heat: 1.513970588235294,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.663000",
                heat: 1.4213235294117648,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.545000",
                heat: 1.1588235294117648,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:04.753000",
                heat: 1.3147058823529412,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.253000",
                heat: 0.9485294117647058,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.378000",
                heat: 1.0073529411764706,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 5.2",
            slug: "5-2",
            description: "Feedback in Vector Space Model - Rocchio",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+5.2+Feedback+in+Vector+Space+Model+-+Rocchio.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/PyTkW/lesson-5-2-feedback-in-vector-space-model-rocchio",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.2456011730205279,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.930000",
                heat: 1.3929618768328447,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.300000",
                heat: 1.0579178885630498,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.010000",
                heat: 1.1803519061583578,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.620000",
                heat: 1.9164222873900294,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.700000",
                heat: 1.936950146627566,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.760000",
                heat: 1.2543988269794721,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.510000",
                heat: 1.4215542521994136,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.570000",
                heat: 1.3511730205278591,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:05.794000",
                heat: 1.3819648093841643,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.210000",
                heat: 1.1004398826979471,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.700000",
                heat: 1.2939882697947214,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 5.4",
            slug: "5-4",
            description: "Web Search - Introduction & Web Crawler",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+5.4+Web+Search+-+Introduction+%26+Web+Crawler.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/qkTHD/lesson-5-4-web-search-introduction-web-crawler",
            buckets: [
              {
                id: 0,
                interval: "00:00:07.440000",
                heat: 0.9413561392791692,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.040000",
                heat: 1.0256566890653636,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.020000",
                heat: 0.8167379352474038,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.490000",
                heat: 0.8130726939523518,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.540000",
                heat: 0.998167379352474,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.040000",
                heat: 0.7605375687232743,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.995000",
                heat: 0.8497251069028711,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.110000",
                heat: 0.6432498472816127,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.900000",
                heat: 0.5455100794135614,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.760000",
                heat: 0.5302382406841784,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.780000",
                heat: 0.7519853390348198,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.5",
            slug: "6-5",
            description:
              "Recommender Systems - Content-Based Filtering - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.5+Recommender+Systems+-+Content-Based+Filtering+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/QORNe/lesson-6-5-recommender-systems-content-based-filtering-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.0903814262023217,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.500000",
                heat: 1.466832504145937,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.200000",
                heat: 1.5024875621890548,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.040000",
                heat: 1.8897180762852404,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.210000",
                heat: 0.8731343283582089,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.020000",
                heat: 0.763681592039801,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.620000",
                heat: 0.648424543946932,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.570000",
                heat: 0.632669983416252,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.810000",
                heat: 0.7446102819237148,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.620000",
                heat: 0.8913764510779436,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.470000",
                heat: 0.7388059701492538,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.900000",
                heat: 0.8872305140961857,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 7.827263120744971e-18,
                  },
                  {
                    topicId: 2,
                    probability: 3.172798382129002e-33,
                  },
                  {
                    topicId: 3,
                    probability: 1.5892057328751542e-28,
                  },
                  {
                    topicId: 4,
                    probability: 2.5744134411424978e-24,
                  },
                  {
                    topicId: 5,
                    probability: 3.723364235830274e-24,
                  },
                  {
                    topicId: 6,
                    probability: 3.251011444259512e-13,
                  },
                  {
                    topicId: 8,
                    probability: 1.5353614964696266e-29,
                  },
                  {
                    topicId: 9,
                    probability: 2.866997990948642e-18,
                  },
                  {
                    topicId: 11,
                    probability: 9.15008159571374e-23,
                  },
                  {
                    topicId: 13,
                    probability: 6.178497531006784e-19,
                  },
                  {
                    topicId: 14,
                    probability: 1.994475271172971e-32,
                  },
                  {
                    topicId: 15,
                    probability: 5.010544146986108e-15,
                  },
                  {
                    topicId: 19,
                    probability: 4.921415247314932e-20,
                  },
                  {
                    topicId: 21,
                    probability: 8.672483226775438e-7,
                  },
                  {
                    topicId: 22,
                    probability: 0.9999991327513359,
                  },
                  {
                    topicId: 29,
                    probability: 1.1305361588536016e-14,
                  },
                  {
                    topicId: 31,
                    probability: 6.964063155882835e-29,
                  },
                  {
                    topicId: 32,
                    probability: 7.187005252637162e-22,
                  },
                  {
                    topicId: 35,
                    probability: 6.113161919116384e-27,
                  },
                  {
                    topicId: 37,
                    probability: 3.112583834094083e-25,
                  },
                  {
                    topicId: 40,
                    probability: 1.312782566375549e-28,
                  },
                  {
                    topicId: 42,
                    probability: 1.4507618236608307e-24,
                  },
                  {
                    topicId: 44,
                    probability: 3.97052403181179e-26,
                  },
                  {
                    topicId: 47,
                    probability: 2.4595062601169133e-25,
                  },
                  {
                    topicId: 48,
                    probability: 7.1030750657406565e-31,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01",
                heat: 0.763681592039801,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.6",
            slug: "6-6",
            description:
              "Recommender Systems - Content-Based Filtering - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.6+Recommender+Systems+-+Content-Based+Filtering+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/7M0GD/lesson-6-6-recommender-systems-content-based-filtering-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.1688679245283018,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.980000",
                heat: 0.6584905660377358,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00",
                heat: 0.8216981132075472,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.320000",
                heat: 0.9283018867924528,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.530000",
                heat: 0.9811320754716981,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.170000",
                heat: 0.6990566037735849,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.622000",
                heat: 0.8084905660377358,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.030000",
                heat: 0.8726415094339622,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.094000",
                heat: 0.8235849056603773,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.770000",
                heat: 0.710377358490566,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:05.752000",
                heat: 0.4669811320754717,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.7",
            slug: "6-7",
            description:
              "Recommender Systems - Collaborative Filtering - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.7+Recommender+Systems+-+Collaborative+Filtering+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/cIFsU/lesson-6-7-recommender-systems-collaborative-filtering-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.4187793427230047,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.925000",
                heat: 1.252582159624413,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.293000",
                heat: 0.8723004694835681,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.260000",
                heat: 1.2093896713615024,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.285000",
                heat: 1.1136150234741784,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.999000",
                heat: 1.1586854460093896,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.970000",
                heat: 0.4328638497652582,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.8",
            slug: "6-8",
            description:
              "Recommender Systems - Collaborative Filtering - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.8+Recommender+Systems+-+Collaborative+Filtering+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/awVwS/lesson-6-8-recommender-systems-collaborative-filtering-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.7011173184357542,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:05.110000",
                heat: 0.8873370577281192,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.920000",
                heat: 0.904096834264432,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.830000",
                heat: 0.9711359404096834,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.950000",
                heat: 0.9432029795158287,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:05.690000",
                heat: 0.9739292364990689,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.580000",
                heat: 0.7607076350093109,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.030000",
                heat: 1.0577281191806331,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:05.367000",
                heat: 1.0204841713221602,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:07.120000",
                heat: 1.0437616387337059,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.470000",
                heat: 0.946927374301676,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.320000",
                heat: 1.23463687150838,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.9",
            slug: "6-9",
            description:
              "Recommender Systems - Collaborative Filtering - Part 3",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.9+Recommender+Systems+-+Collaborative+Filtering+-+Part+3.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/tfXZ4/lesson-6-9-recommender-systems-collaborative-filtering-part-3",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.083000",
                heat: 0.9228456913827655,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.720000",
                heat: 0.7805611222444889,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.940000",
                heat: 0.7895791583166333,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.400000",
                heat: 0.750501002004008,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.990000",
                heat: 0.8697394789579158,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.10",
            slug: "6-10",
            description: "Summary for Exam 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.10+Summary+for+Exam+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/9CAed/lesson-6-10-summary-for-exam-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.346000",
                heat: 0.6648590021691974,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.258000",
                heat: 0.46637744034707157,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.408000",
                heat: 0.39913232104121477,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.348000",
                heat: 0.3926247288503254,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.623000",
                heat: 0.37852494577006507,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.133000",
                heat: 0.5802603036876356,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.725000",
                heat: 0.5824295010845987,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.390000",
                heat: 0.48698481561822127,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.071000",
                heat: 0.3882863340563991,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.335000",
                heat: 0.4403470715835141,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 5.5",
            slug: "5-5",
            description: "Web Indexing",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+5.5+Web+Indexing.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/lRm0I/lesson-5-5-web-indexing",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.172000",
                heat: 1.16189111747851,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.874000",
                heat: 1.6146131805157593,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 2.1344235467945218e-16,
                  },
                  {
                    topicId: 2,
                    probability: 1.0327897572658752e-31,
                  },
                  {
                    topicId: 3,
                    probability: 1.639860737070413e-26,
                  },
                  {
                    topicId: 4,
                    probability: 1.8889211099822692e-23,
                  },
                  {
                    topicId: 5,
                    probability: 1.5209681053240013e-22,
                  },
                  {
                    topicId: 6,
                    probability: 3.2023893973621337e-12,
                  },
                  {
                    topicId: 8,
                    probability: 1.1497939720097942e-27,
                  },
                  {
                    topicId: 9,
                    probability: 1.1090591655059186e-16,
                  },
                  {
                    topicId: 11,
                    probability: 8.616256715710595e-21,
                  },
                  {
                    topicId: 13,
                    probability: 1.2733631639712488e-17,
                  },
                  {
                    topicId: 14,
                    probability: 2.5139040712743062e-31,
                  },
                  {
                    topicId: 15,
                    probability: 8.417032286282555e-14,
                  },
                  {
                    topicId: 19,
                    probability: 9.244018877814274e-19,
                  },
                  {
                    topicId: 21,
                    probability: 0.00003136398793866386,
                  },
                  {
                    topicId: 22,
                    probability: 0.9999686360086616,
                  },
                  {
                    topicId: 29,
                    probability: 1.128017028779407e-13,
                  },
                  {
                    topicId: 31,
                    probability: 2.1771129436223098e-27,
                  },
                  {
                    topicId: 32,
                    probability: 1.5283272024646722e-20,
                  },
                  {
                    topicId: 35,
                    probability: 2.3486174304137103e-25,
                  },
                  {
                    topicId: 37,
                    probability: 1.0905124517062638e-23,
                  },
                  {
                    topicId: 40,
                    probability: 2.1037709184326895e-27,
                  },
                  {
                    topicId: 42,
                    probability: 3.2305102076042856e-23,
                  },
                  {
                    topicId: 44,
                    probability: 7.776541943940876e-25,
                  },
                  {
                    topicId: 47,
                    probability: 5.447878152657828e-25,
                  },
                  {
                    topicId: 48,
                    probability: 8.79541032276477e-30,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.670000",
                heat: 1.2793696275071633,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.460000",
                heat: 1.4770773638968482,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:05.668000",
                heat: 1.0816618911174785,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:05.300000",
                heat: 1.241404011461318,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.080000",
                heat: 1.0845272206303724,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.920000",
                heat: 0.7213467048710601,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.390000",
                heat: 0.8982808022922636,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.910000",
                heat: 0.8223495702005731,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.850000",
                heat: 1.0401146131805157,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.570000",
                heat: 0.7406876790830945,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.070000",
                heat: 1.072349570200573,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:02.420000",
                heat: 0.6840974212034384,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.052000",
                heat: 0.8481375358166189,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:05.290000",
                heat: 0.670487106017192,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:03.430000",
                heat: 0.6626074498567335,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:02.059000",
                heat: 0.30730659025787965,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 5.6",
            slug: "5-6",
            description: "Link Analysis - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+5.6+Link+Analysis+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/nE8nq/lesson-5-6-link-analysis-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.3784800601956357,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.540000",
                heat: 0.9382994732881866,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.570000",
                heat: 0.8848758465011287,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.845000",
                heat: 1.0451467268623025,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:04.545000",
                heat: 0.7291196388261851,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.620000",
                heat: 1.1534988713318284,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.610000",
                heat: 1.0135440180586908,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.960000",
                heat: 0.8126410835214447,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.880000",
                heat: 1.0842738901429647,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.129000",
                heat: 0.3732129420617005,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 5.7",
            slug: "5-7",
            description: "Link Analysis - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+5.7+Link+Analysis+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/GUQ1Q/lesson-5-7-link-analysis-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.4205905826017557,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.100000",
                heat: 0.7661612130885874,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.910000",
                heat: 1.0399042298483638,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.210000",
                heat: 0.6823623304070231,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.550000",
                heat: 0.9345570630486831,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.170000",
                heat: 0.8603351955307262,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.670000",
                heat: 0.7270550678371908,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.090000",
                heat: 0.8172386272944933,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.790000",
                heat: 0.9561053471667997,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:04.590000",
                heat: 1.2825219473264167,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.940000",
                heat: 0.9393455706304868,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.820000",
                heat: 0.8499600957701516,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.130000",
                heat: 0.6703910614525139,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.900000",
                heat: 0.6568236233040702,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.400000",
                heat: 0.8292098962490024,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:02.170000",
                heat: 0.7581803671189146,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 6.439499659229669e-16,
                  },
                  {
                    topicId: 2,
                    probability: 5.585647932603525e-31,
                  },
                  {
                    topicId: 3,
                    probability: 3.3436889145387922e-25,
                  },
                  {
                    topicId: 4,
                    probability: 6.034549730560116e-23,
                  },
                  {
                    topicId: 5,
                    probability: 9.118890248376187e-22,
                  },
                  {
                    topicId: 6,
                    probability: 4.3142702021578494e-11,
                  },
                  {
                    topicId: 8,
                    probability: 1.420328103981297e-26,
                  },
                  {
                    topicId: 9,
                    probability: 3.892899697951823e-16,
                  },
                  {
                    topicId: 11,
                    probability: 3.393401319503481e-20,
                  },
                  {
                    topicId: 13,
                    probability: 7.799175134776127e-17,
                  },
                  {
                    topicId: 14,
                    probability: 4.605959458443792e-31,
                  },
                  {
                    topicId: 15,
                    probability: 6.349632541596853e-13,
                  },
                  {
                    topicId: 19,
                    probability: 3.020437235205952e-18,
                  },
                  {
                    topicId: 21,
                    probability: 0.00005720766112722646,
                  },
                  {
                    topicId: 22,
                    probability: 0.9999427922938369,
                  },
                  {
                    topicId: 29,
                    probability: 1.2570995113029354e-12,
                  },
                  {
                    topicId: 31,
                    probability: 1.2761624030832526e-26,
                  },
                  {
                    topicId: 32,
                    probability: 1.592945747785219e-19,
                  },
                  {
                    topicId: 35,
                    probability: 6.95411764785259e-25,
                  },
                  {
                    topicId: 37,
                    probability: 6.682810450853181e-23,
                  },
                  {
                    topicId: 40,
                    probability: 7.874825159197883e-26,
                  },
                  {
                    topicId: 42,
                    probability: 1.091746432915009e-23,
                  },
                  {
                    topicId: 44,
                    probability: 6.1041049410167995e-24,
                  },
                  {
                    topicId: 47,
                    probability: 3.963868231403152e-23,
                  },
                  {
                    topicId: 48,
                    probability: 5.920364169513049e-29,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:01.540000",
                heat: 0.7126895450917797,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:01.370000",
                heat: 0.5642458100558659,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 5.8",
            slug: "5-8",
            description: "Link Analysis - Part 3 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+5.8+Link+Analysis+-+Part+3+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/d6INf/lesson-5-8-link-analysis-part-3-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.3390410958904109,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.210000",
                heat: 1.2808219178082192,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.039000",
                heat: 1.0744863013698631,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.428000",
                heat: 0.800513698630137,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.410000",
                heat: 0.8553082191780822,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.920000",
                heat: 1.0171232876712328,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.1",
            slug: "6-1",
            description: "Learning to Rank - Part 1 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.1+Learning+to+Rank+-+Part+1+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/mFYTD/lesson-6-1-learning-to-rank-part-1-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.617363344051447,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.176000",
                heat: 1.1784565916398715,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.378000",
                heat: 0.8794212218649518,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.610000",
                heat: 0.9308681672025724,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.600000",
                heat: 1.0618971061093248,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.022000",
                heat: 1.1245980707395498,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.2",
            slug: "6-2",
            description: "Learning to Rank - Part 2 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.2+Learning+to+Rank+-+Part+2+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/3d9fD/lesson-6-2-learning-to-rank-part-2-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.286689419795222,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.580000",
                heat: 0.9308873720136519,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:05.706000",
                heat: 0.8762798634812287,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:05.780000",
                heat: 0.8131399317406144,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:04.214000",
                heat: 0.7679180887372014,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.665000",
                heat: 0.636518771331058,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.960000",
                heat: 0.6518771331058021,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.970000",
                heat: 0.734641638225256,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.290000",
                heat: 0.6493174061433447,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.460000",
                heat: 0.9914675767918089,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.961000",
                heat: 0.47525597269624575,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.3",
            slug: "6-3",
            description: "Learning to Rank - Part 3 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.3+Learning+to+Rank+-+Part+3+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/h3Jru/lesson-6-3-learning-to-rank-part-3-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.4709562109025915,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.750000",
                heat: 0.9401251117068812,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.136000",
                heat: 0.774798927613941,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.330000",
                heat: 0.8427167113494192,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:06.320000",
                heat: 0.966934763181412,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 6.4",
            slug: "6-4",
            description: "Future of Web Search",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textretrieval/Lesson+6.4+Future+of+Web+Search.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/kM78U/lesson-6-4-future-of-web-search",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 0.7960242005185826,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.070000",
                heat: 0.4554883318928263,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.780000",
                heat: 0.5583405358686258,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02",
                heat: 0.4693171996542783,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.300000",
                heat: 0.6318063958513397,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.390000",
                heat: 0.6473638720829732,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.440000",
                heat: 0.47450302506482284,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:05.465000",
                heat: 0.4814174589455488,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.810000",
                heat: 0.7113223854796888,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:06.190000",
                heat: 0.5661192739844425,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.810000",
                heat: 0.5600691443388073,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.240000",
                heat: 0.5289541918755402,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:04.210000",
                heat: 0.7960242005185826,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 0,
        name: "Text Analytics",
        slug: "textanalytics",
        description: "Analyzing text",
        topics: [
          {
            id: 0,
            name: "",
            description: {
              estim: 0.12706981886126223,
              data: 0.1265069488554313,
              user: 0.09348391408219865,
              problem: 0.09124285190329423,
              match: 0.09087148639046512,
              text: 0.08526791172163767,
              likelihood: 0.07239789057034941,
              prefer: 0.06120299752024663,
              cours: 0.05933575211168175,
              anoth: 0.05803015108019259,
            },
            difficulty: 0.09524878143504907,
          },
          {
            id: 1,
            name: "",
            description: {
              text: 0.28194854850408163,
              data: 0.20013590247723728,
              can: 0.17616635025742097,
              mine: 0.1455671467266298,
              topic: 0.11716139655439657,
              paper: 0.10719755512776113,
              context: 0.09411429190953033,
              techniqu: 0.08182672770887073,
              contextu: 0.07736940499689067,
              use: 0.07707717922109399,
            },
            difficulty: 0.11389959346430995,
          },
          {
            id: 2,
            name: "",
            description: {
              cluster: 0.17921746295599075,
              featur: 0.14607572084080347,
              can: 0.13470464907069357,
              use: 0.0840051773806753,
              similar: 0.08254049471722988,
              prior: 0.07538170434641944,
              count: 0.07071665489689527,
              object: 0.06903723709506658,
              high: 0.0658423650668789,
              also: 0.05853675476521889,
            },
            difficulty: 0.11541820086990018,
          },
          {
            id: 3,
            name: "",
            description: {
              probabl: 0.27908480718410555,
              word: 0.2259538779886835,
              distribut: 0.19776151419380059,
              document: 0.16759997748529776,
              now: 0.13708211499721748,
              model: 0.12593710186638876,
              gener: 0.11842191719912082,
              theta: 0.11589529344593721,
              one: 0.09431697670568301,
              case: 0.08819333880395591,
            },
            difficulty: 0.1461433089032034,
          },
          {
            id: 4,
            name: "",
            description: {
              probabl: 0.2192930906230564,
              theta: 0.21272839820888897,
              prior: 0.12472821817079964,
              likelihood: 0.1246294919268858,
              word: 0.11938400717901883,
              posterior: 0.11038156688595861,
              estim: 0.10644122432866492,
              document: 0.09885671794581899,
              just: 0.09766008085371276,
              observ: 0.09572788635952938,
            },
            difficulty: 0.15214337331197894,
          },
          {
            id: 5,
            name: "",
            description: {
              featur: 0.4075819391478876,
              use: 0.15368118395012081,
              learn: 0.14100655851928195,
              train: 0.12423749438222594,
              machin: 0.11791814101210404,
              data: 0.1149433141737727,
              domain: 0.10656053423649606,
              problem: 0.0999541233634693,
              design: 0.09946965907321934,
              analysi: 0.09739192343419772,
            },
            difficulty: 0.14592347858071425,
          },
          {
            id: 6,
            name: "",
            description: {
              topic: 0.2504207039283539,
              word: 0.21241364703230653,
              context: 0.18227332177854624,
              contextu: 0.11673100517870044,
              right: 0.11063288651739832,
              sentenc: 0.10758750825763308,
              coverag: 0.10702770232369017,
              war: 0.10435552801988686,
              good: 0.09819766274651497,
              nation: 0.08992742910328265,
            },
            difficulty: 0.14439380401520027,
          },
          {
            id: 7,
            name: "",
            description: {
              data: 0.24342513967070975,
              predict: 0.08645009117228807,
              mine: 0.07354257183271523,
              rule: 0.07273749337835496,
              look: 0.06984251513198204,
              probabl: 0.0665103672118749,
              kind: 0.06449502348830628,
              human: 0.060608364809592134,
              will: 0.06010722941808563,
              sensor: 0.053021649430144785,
            },
            difficulty: 0.1433323430948819,
          },
          {
            id: 8,
            name: "",
            description: {
              data: 0.2096127929354628,
              opinion: 0.20618385057728592,
              plsa: 0.20056826454922705,
              music: 0.17685923671122514,
              also: 0.15246000760739742,
              might: 0.15016820380573617,
              model: 0.13826073059221408,
              context: 0.11936135075024681,
              dirichlet: 0.11522105385740579,
              lda: 0.11055600440788163,
            },
            difficulty: 0.13952654270053158,
          },
          {
            id: 9,
            name: "",
            description: {
              paramet: 0.12305704887772582,
              variabl: 0.11955574338342487,
              plsa: 0.11733858569132197,
              theta: 0.11003904250639557,
              lda: 0.09573688833286724,
              valu: 0.07927178218320477,
              represent: 0.07635234866651541,
              comput: 0.07203843712928448,
              problem: 0.07199430504194708,
              just: 0.06826226548232774,
            },
            difficulty: 0.1376127987926552,
          },
          {
            id: 10,
            name: "",
            description: {
              word: 0.18897021949057663,
              weight: 0.1323649468184363,
              term: 0.11718786445698827,
              count: 0.11320690077439823,
              rate: 0.10512069357622693,
              frequent: 0.10070420379268522,
              idf: 0.09448401637432359,
              frequenc: 0.08229256566057101,
              will: 0.0817334886406046,
              document: 0.07563794551222244,
            },
            difficulty: 0.13491054091803423,
          },
          {
            id: 11,
            name: "",
            description: {
              term: 0.1544305235777232,
              similar: 0.15420114844293467,
              word: 0.11533928663843314,
              context: 0.10338712792455339,
              cluster: 0.09237761122367637,
              group: 0.08261602586110774,
              pick: 0.08133119859364474,
              can: 0.07275126250196519,
              match: 0.06234056999639368,
              decis: 0.057675520546869516,
            },
            difficulty: 0.13409403457313737,
          },
          {
            id: 12,
            name: "",
            description: {
              cluster: 0.1429428028842147,
              evalu: 0.1186935148921723,
              normal: 0.11552128126649587,
              distribut: 0.11277847282578618,
              method: 0.09020860263557248,
              averag: 0.08557614837329235,
              gener: 0.08543679847883294,
              perspect: 0.08482974046136849,
              d: 0.08461054329614348,
              inaud: 0.07217340114590678,
            },
            difficulty: 0.13357382766847598,
          },
          {
            id: 13,
            name: "",
            description: {
              term: 0.20420602752805428,
              can: 0.18418657166699978,
              sport: 0.09480517143227912,
              topic: 0.09440828702225869,
              use: 0.08518901264820414,
              defin: 0.07159074870965207,
              scienc: 0.057741471958079923,
              gener: 0.05715798557007853,
              cluster: 0.05532132955330139,
              way: 0.053117152889536376,
            },
            difficulty: 0.13310004952467144,
          },
          {
            id: 14,
            name: "",
            description: {
              languag: 0.16355697546218168,
              model: 0.13495720344012938,
              featur: 0.12812743434128024,
              mine: 0.10741461478539294,
              speech: 0.10559826439654768,
              opinion: 0.10520022574510354,
              talk: 0.10520022574510354,
              part: 0.10093321494702351,
              text: 0.09537274941268226,
              topic: 0.09083825299537188,
            },
            difficulty: 0.1313924700723406,
          },
          {
            id: 15,
            name: "",
            description: {
              topic: 0.2755210736614562,
              algorithm: 0.12192942801679056,
              paramet: 0.09543194714349329,
              know: 0.08969543277995569,
              improv: 0.0886721148198146,
              step: 0.08456687130423333,
              explain: 0.07640453122694316,
              discov: 0.075236772405185,
              model: 0.07033098818629906,
              idea: 0.06763423826183772,
            },
            difficulty: 0.1294890825769379,
          },
          {
            id: 16,
            name: "",
            description: {
              word: 0.14467385511149164,
              term: 0.129433648187147,
              vector: 0.107200135761215,
              count: 0.09787003686216666,
              differ: 0.08352956160382921,
              normal: 0.07993533919134614,
              two: 0.07792453300285097,
              well: 0.0750976262869395,
              step: 0.0709714749867105,
              use: 0.06806947447760595,
            },
            difficulty: 0.13065851526203734,
          },
          {
            id: 17,
            name: "",
            description: {
              model: 0.13442097738455921,
              cluster: 0.11575302757552228,
              categor: 0.10276010350038882,
              go: 0.09336079021780629,
              classifi: 0.09297983425090409,
              use: 0.08564089473705246,
              error: 0.08025047854822605,
              lectur: 0.07368286412439005,
              want: 0.06270989261801518,
              method: 0.06184997311711469,
            },
            difficulty: 0.13355812317107899,
          },
          {
            id: 18,
            name: "",
            description: {
              topic: 0.36417729927019804,
              can: 0.12476310964492554,
              mine: 0.09776702486257365,
              cover: 0.096951711174377,
              discov: 0.09228666172485284,
              analysi: 0.0868752043634048,
              opinion: 0.08556899051753804,
              exampl: 0.08144748352681164,
              text: 0.07978818107582034,
              also: 0.07712311108295913,
            },
            difficulty: 0.13264322930668745,
          },
          {
            id: 19,
            name: "",
            description: {
              topic: 0.1606662103871361,
              model: 0.15850359836635386,
              context: 0.1250134706282628,
              opinion: 0.10717629245707934,
              problem: 0.09678157682164101,
              word: 0.09044887153479685,
              depend: 0.09008552219781978,
              solv: 0.08877930835195301,
              comput: 0.08846109952748687,
              vector: 0.08803290044002914,
            },
            difficulty: 0.13058823198816957,
          },
          {
            id: 20,
            name: "",
            description: {
              cours: 0.25955572298750684,
              x: 0.18368969616651418,
              score: 0.17785633055932068,
              badg: 0.15536668462203762,
              object: 0.14776470781460152,
              valu: 0.13941632309524157,
              text: 0.12198136094692918,
              y: 0.11123120923896243,
              two: 0.1014874172753218,
              group: 0.09644094868868254,
            },
            difficulty: 0.12915165800803233,
          },
          {
            id: 21,
            name: "",
            description: {
              eat: 0.29036034631282165,
              relat: 0.24475277794109004,
              meat: 0.21302021691840897,
              occur: 0.1856996423888121,
              know: 0.15595324214546266,
              help: 0.15195791486348662,
              word: 0.14664359277824784,
              syntagmat: 0.12746960049283373,
              entropi: 0.11944571543965217,
              discov: 0.11459406401214704,
            },
            difficulty: 0.1281363386850997,
          },
          {
            id: 22,
            name: "",
            description: {
              relat: 0.49241345084596233,
              word: 0.31038182280963444,
              context: 0.22232167224141744,
              similar: 0.16710906386143026,
              syntagmat: 0.16178950897307778,
              paradigmat: 0.1527622886592748,
              discov: 0.1275006962611277,
              two: 0.11054429039902858,
              discoveri: 0.07874883173975779,
              occurr: 0.06766898966816416,
            },
            difficulty: 0.12757374364933086,
          },
          {
            id: 23,
            name: "",
            description: {
              line: 0.22461136549585892,
              topic: 0.19798111013822903,
              separ: 0.16337362022191285,
              data: 0.11097076090545023,
              way: 0.09636197912928648,
              ye: 0.0931682145061507,
              determin: 0.09130219472634103,
              said: 0.09074238879239814,
              text: 0.08896249300242584,
              realli: 0.08234529978325464,
            },
            difficulty: 0.1261306111943211,
          },
          {
            id: 24,
            name: "",
            description: {
              mine: 0.2769672843380577,
              talk: 0.1476577682026434,
              lectur: 0.1302425260253191,
              knowledg: 0.10331058297096553,
              techniqu: 0.10144456319115586,
              articl: 0.09149340013307024,
              text: 0.09148774552774634,
              optim: 0.08776136057345091,
              will: 0.08676426515575389,
              paramet: 0.0822245594591163,
            },
            difficulty: 0.1250266983929915,
          },
          {
            id: 25,
            name: "",
            description: {
              y: 0.13673097612595664,
              x: 0.13057311085258475,
              sentiment: 0.09545044051899629,
              just: 0.09101349152061981,
              can: 0.09061967947934378,
              know: 0.08520116455443204,
              compon: 0.08349408110382553,
              probabl: 0.077792416732749,
              opinion: 0.07679024272089963,
              entropi: 0.07323097231487236,
            },
            difficulty: 0.12462781837404867,
          },
          {
            id: 26,
            name: "",
            description: {
              categori: 0.2087113026623889,
              document: 0.164829740743639,
              two: 0.1389101240602183,
              probabl: 0.11364060459040867,
              one: 0.10977011840196477,
              word: 0.10539400104737885,
              model: 0.09932040763503062,
              distribut: 0.07718098586038562,
              use: 0.07535710201108778,
              let: 0.06850700359359294,
            },
            difficulty: 0.12688948827724744,
          },
          {
            id: 27,
            name: "",
            description: {
              text: 0.4902354355719937,
              data: 0.46042651533456175,
              mine: 0.22103495931159894,
              predict: 0.16240393284936142,
              knowledg: 0.1605885132506739,
              human: 0.14693176742344874,
              world: 0.10222949038215402,
              content: 0.06353327807086478,
              non: 0.05779921693457696,
              help: 0.05676500668242786,
            },
            difficulty: 0.12786807781263757,
          },
          {
            id: 28,
            name: "",
            description: {
              entropi: 0.25604431973016656,
              now: 0.17609593454143446,
              condit: 0.15376355064835387,
              eat: 0.13049991726138715,
              coin: 0.1272238202706081,
              meat: 0.0976157196322885,
              distribut: 0.09730588993299935,
              think: 0.09539762064874116,
              one: 0.09266196523569944,
              predict: 0.08615026036257117,
            },
            difficulty: 0.1277444642775329,
          },
          {
            id: 29,
            name: "",
            description: {
              can: 0.16095268791667375,
              text: 0.1393577499194219,
              categor: 0.13029907207925498,
              object: 0.11710122309114661,
              similar: 0.11107906834721541,
              categori: 0.10734702878759608,
              group: 0.09704999236628274,
              exampl: 0.08612529474630615,
              cluster: 0.08593869276832518,
              link: 0.06797401143361212,
            },
            difficulty: 0.1288718030935361,
          },
          {
            id: 30,
            name: "",
            description: {
              text: 0.4132868179138743,
              cluster: 0.19702458099451253,
              mine: 0.13449526684139476,
              book: 0.1156308155358232,
              applic: 0.11292949973747268,
              techniqu: 0.11031707204573915,
              retriev: 0.10536770674687004,
              data: 0.09979612470168193,
              human: 0.09939644345147912,
              cours: 0.09594871974120471,
            },
            difficulty: 0.1281146136542283,
          },
          {
            id: 31,
            name: "",
            description: {
              text: 0.2662259721478989,
              opinion: 0.22521359092632226,
              data: 0.21590854946480545,
              can: 0.16470823176687016,
              review: 0.13356069794075323,
              non: 0.10882653931920083,
              inform: 0.09856343053024766,
              also: 0.09709567214393144,
              product: 0.0919359281322319,
              lot: 0.07728454068103459,
            },
            difficulty: 0.12800225415544184,
          },
          {
            id: 32,
            name: "",
            description: {
              context: 0.3122389499301566,
              cat: 0.26399255985011105,
              can: 0.25100888165592117,
              dog: 0.1915026383126764,
              word: 0.18779015629698848,
              cluster: 0.1655944147335952,
              sentenc: 0.14648738457885363,
              see: 0.14562800308963178,
              gener: 0.1333564495832978,
              similar: 0.12560268872512195,
            },
            difficulty: 0.12743612733524934,
          },
          {
            id: 33,
            name: "",
            description: {
              d: 0.21393423795732552,
              sub: 0.17404888679686936,
              rate: 0.1640775490067553,
              probabl: 0.1506524313580425,
              normal: 0.12355095895523344,
              aspect: 0.12075192928551894,
              theta: 0.11542190488119372,
              word: 0.11141854385456879,
              re: 0.08452740949347608,
              k: 0.08356043877391912,
            },
            difficulty: 0.12683027316666193,
          },
          {
            id: 34,
            name: "",
            description: {
              email: 0.11235419592960125,
              problem: 0.10929707994208224,
              categori: 0.10678986729597643,
              categor: 0.10486628869708807,
              rank: 0.09446423415670298,
              model: 0.09368007261075975,
              spam: 0.08859818590693978,
              evalu: 0.08094750480972016,
              probabl: 0.07037865347641342,
              anoth: 0.06713895843912862,
            },
            difficulty: 0.1282081069934396,
          },
          {
            id: 35,
            name: "",
            description: {
              variabl: 0.3003632726335062,
              random: 0.20733305691894752,
              entropi: 0.17339020165928798,
              valu: 0.165534213851211,
              one: 0.14014699247936135,
              x: 0.12248527113623683,
              step: 0.10626960378476911,
              inform: 0.09581989301783497,
              word: 0.09233947665048114,
              predict: 0.09227445543619661,
            },
            difficulty: 0.1282262437207868,
          },
          {
            id: 36,
            name: "",
            description: {
              model: 0.14413837541199903,
              probabl: 0.13742070420468422,
              re: 0.10885018947092315,
              lectur: 0.10792634091843856,
              classifi: 0.09219262788785046,
              maxim: 0.0916032485138141,
              y: 0.08880421884409961,
              one: 0.08568197076118983,
              data: 0.07830661196223151,
              go: 0.07629272498195458,
            },
            difficulty: 0.12894435430382634,
          },
          {
            id: 37,
            name: "",
            description: {
              result: 0.13153679051639458,
              might: 0.11287659271829793,
              exampl: 0.09477620085414416,
              differ: 0.09461072362838746,
              import: 0.09249472761392405,
              get: 0.09137511574603825,
              sensor: 0.09060758308189011,
              inform: 0.08969569794420955,
              time: 0.08708327025247602,
              locat: 0.08612913561034692,
            },
            difficulty: 0.1292699853517564,
          },
          {
            id: 38,
            name: "",
            description: {
              add: 0.0809810366795318,
              network: 0.07911501689972214,
              languag: 0.07736865397974255,
              count: 0.07345001244214223,
              k: 0.07289020650819934,
              smooth: 0.06737332566339296,
              distribut: 0.05974688955490906,
              actual: 0.05852185420366491,
              represent: 0.05748342083040173,
              delta: 0.056311097220836756,
            },
            difficulty: 0.12949419427501227,
          },
          {
            id: 39,
            name: "",
            description: {
              topic: 0.21384763132389917,
              word: 0.18430672953785796,
              time: 0.1748213495602061,
              seri: 0.15746074851655842,
              correl: 0.12106674571885216,
              inform: 0.1183321224056039,
              relat: 0.11074584766485052,
              w: 0.10327515145419408,
              mutual: 0.09985190949407044,
              count: 0.09469146046706962,
            },
            difficulty: 0.1289705198684947,
          },
          {
            id: 40,
            name: "",
            description: {
              cluster: 0.31631701009180985,
              topic: 0.29341828164948874,
              can: 0.18015088101504198,
              text: 0.11225441860033296,
              similar: 0.10204462452562112,
              time: 0.09809932556335194,
              neighbor: 0.09340761868915888,
              author: 0.09228800682127307,
              document: 0.08087862873711585,
              context: 0.07887932183131237,
            },
            difficulty: 0.12996457979085715,
          },
          {
            id: 41,
            name: "",
            description: {
              document: 0.29517082651431015,
              topic: 0.16333360732788696,
              one: 0.14306177616255178,
              say: 0.131758137346068,
              featur: 0.09465823594515071,
              system: 0.09412102482273788,
              gener: 0.09362354940336065,
              precis: 0.0911353931750424,
              ye: 0.08052167524165736,
              prior: 0.0750989204744443,
            },
            difficulty: 0.12961489311236335,
          },
          {
            id: 42,
            name: "",
            description: {
              paramet: 0.26057463989797147,
              model: 0.14665713681108103,
              valu: 0.1422079220253834,
              estim: 0.11952416982826286,
              guess: 0.07956812279546979,
              probabl: 0.07901692426347032,
              will: 0.0745006367041381,
              aggreg: 0.07441034018563732,
              use: 0.07216510750888634,
              data: 0.05426593396563633,
            },
            difficulty: 0.13072179117854782,
          },
          {
            id: 43,
            name: "",
            description: {
              word: 0.24449810167402658,
              text: 0.21438351556113583,
              mine: 0.15346283950329018,
              paper: 0.12886824120148438,
              like: 0.10245484561925715,
              also: 0.09841525599890502,
              pattern: 0.09436530667084644,
              probabl: 0.08396281840330055,
              can: 0.0820230730401273,
              distribut: 0.07344745374113729,
            },
            difficulty: 0.13031567647955966,
          },
          {
            id: 44,
            name: "",
            description: {
              go: 0.15082237667862533,
              one: 0.09707141132610608,
              two: 0.09382069863163692,
              beta: 0.0834302755454938,
              k: 0.07693844585055633,
              re: 0.07489541978676656,
              classifi: 0.07204755488865483,
              point: 0.06883608172858204,
              margin: 0.06879684219418568,
              model: 0.06825622764824449,
            },
            difficulty: 0.13111707087047908,
          },
          {
            id: 45,
            name: "",
            description: {
              probabl: 0.16326049748633797,
              paramet: 0.16268027944972188,
              categori: 0.13012281496075334,
              word: 0.09350093116154991,
              classifi: 0.08357936346063254,
              one: 0.0770687063339719,
              just: 0.06892652752041653,
              distribut: 0.06612749785070203,
              sub: 0.06448681482638705,
              c: 0.0640544639902382,
            },
            difficulty: 0.13141594460920372,
          },
          {
            id: 46,
            name: "",
            description: {
              x: 0.15506843044411273,
              hotel: 0.15009213472662813,
              categori: 0.1445567619891771,
              given: 0.1351639764881508,
              region: 0.1346661282422094,
              k: 0.11264709484045532,
              y: 0.10263254571748462,
              document: 0.09516919551222244,
              case: 0.09299192946445234,
              time: 0.0910632230826647,
            },
            difficulty: 0.13051627052032339,
          },
          {
            id: 47,
            name: "",
            description: {
              topic: 0.298003004752154,
              might: 0.0947605209700612,
              exampl: 0.08614779514006303,
              train: 0.06878141826709436,
              see: 0.06599478151811863,
              term: 0.06558014979854423,
              articl: 0.0568969613620599,
              system: 0.04666288741598043,
              network: 0.04554327554809463,
              lectur: 0.045141036749259,
            },
            difficulty: 0.13025009648797461,
          },
          {
            id: 48,
            name: "",
            description: {
              cluster: 0.15090008866011081,
              opinion: 0.12633050594274126,
              object: 0.10434241172904621,
              can: 0.10321377593130984,
              defin: 0.09248271192296402,
              exampl: 0.09063764055173598,
              text: 0.08939427193161414,
              analysi: 0.08445882686978246,
              understand: 0.08347392938323697,
              peopl: 0.08230242991871052,
            },
            difficulty: 0.13024891299242503,
          },
          {
            id: 49,
            name: "",
            description: {
              review: 0.2913375293587348,
              rate: 0.28096847697895216,
              aspect: 0.2714264908982449,
              can: 0.1665718589243844,
              weight: 0.16536551457013957,
              hotel: 0.1376725662179226,
              valu: 0.12484760014459184,
              overal: 0.10459344570793558,
              dimens: 0.07953821025113011,
              differ: 0.07619985707503307,
            },
            difficulty: 0.13051626359115004,
          },
        ],
        lectures: [
          {
            id: 0,
            active: true,
            name: "Lesson 0.1",
            slug: "0-1",
            description: "Introduction to Text Mining and Analytics",
            videoUrl: "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/Lesson+0.1+Introduction+to+Text+Mining+and+Analytics.mp4",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.1800116890707188,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:07.117000",
                heat: 0.603156049094097,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.710000",
                heat: 0.5277615429573349,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.350000",
                heat: 0.4713617767387493,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.170000",
                heat: 0.5011689070718878,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:07.210000",
                heat: 0.4406779661016949,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.100000",
                heat: 0.500146113383986,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.340000",
                heat: 0.4384862653419053,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.758000",
                heat: 0.33167738164815896,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 0.2",
            slug: "0-2",
            description: "Course Prerequisites & Completion",
            videoUrl: "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/Lesson+0.2+Course+Prerequisites+%26+Completion.mp4",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.124000",
                heat: 0.7497375603611169,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:05.047000",
                heat: 0.6288053747638043,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 5.457042067175678e-260,
                  },
                  {
                    topicId: 1,
                    probability: 1.3934583133751166e-13,
                  },
                  {
                    topicId: 2,
                    probability: 1.2880877247918744e-262,
                  },
                  {
                    topicId: 3,
                    probability: 6.388546431425699e-23,
                  },
                  {
                    topicId: 4,
                    probability: 5.7041456990744394e-18,
                  },
                  {
                    topicId: 5,
                    probability: 1.0152127843950338e-11,
                  },
                  {
                    topicId: 6,
                    probability: 9.839585453190993e-17,
                  },
                  {
                    topicId: 7,
                    probability: 2.422625918145563e-10,
                  },
                  {
                    topicId: 8,
                    probability: 0.9999735276795081,
                  },
                  {
                    topicId: 9,
                    probability: 3.4838265463654975e-14,
                  },
                  {
                    topicId: 10,
                    probability: 4.2881408537233677e-256,
                  },
                  {
                    topicId: 11,
                    probability: 6.194510149728021e-270,
                  },
                  {
                    topicId: 12,
                    probability: 1.8474325626668632e-19,
                  },
                  {
                    topicId: 13,
                    probability: 5.800617229060302e-15,
                  },
                  {
                    topicId: 14,
                    probability: 1.2599386140513418e-264,
                  },
                  {
                    topicId: 15,
                    probability: 5.5062079860093954e-18,
                  },
                  {
                    topicId: 16,
                    probability: 5.496067821771175e-16,
                  },
                  {
                    topicId: 17,
                    probability: 3.134769652662394e-10,
                  },
                  {
                    topicId: 18,
                    probability: 1.710382806230148e-20,
                  },
                  {
                    topicId: 19,
                    probability: 1.4487933460326542e-10,
                  },
                  {
                    topicId: 20,
                    probability: 1.799717472789546e-12,
                  },
                  {
                    topicId: 21,
                    probability: 5.877539443623138e-268,
                  },
                  {
                    topicId: 22,
                    probability: 5.682090749299738e-15,
                  },
                  {
                    topicId: 23,
                    probability: 2.627253362377765e-265,
                  },
                  {
                    topicId: 24,
                    probability: 1.237896094844744e-13,
                  },
                  {
                    topicId: 25,
                    probability: 2.911768473677624e-243,
                  },
                  {
                    topicId: 26,
                    probability: 1.5489974120597913e-274,
                  },
                  {
                    topicId: 27,
                    probability: 2.596516603003955e-26,
                  },
                  {
                    topicId: 28,
                    probability: 6.076613456649722e-271,
                  },
                  {
                    topicId: 29,
                    probability: 1.843219992414581e-22,
                  },
                  {
                    topicId: 30,
                    probability: 4.72660931170251e-16,
                  },
                  {
                    topicId: 31,
                    probability: 1.1809350393546507e-266,
                  },
                  {
                    topicId: 32,
                    probability: 2.4566351292731773e-269,
                  },
                  {
                    topicId: 33,
                    probability: 8.247897357785278e-274,
                  },
                  {
                    topicId: 34,
                    probability: 1.5504954462802205e-278,
                  },
                  {
                    topicId: 35,
                    probability: 1.8772671393432934e-272,
                  },
                  {
                    topicId: 36,
                    probability: 5.021336384036715e-16,
                  },
                  {
                    topicId: 37,
                    probability: 2.4784554581456536e-266,
                  },
                  {
                    topicId: 38,
                    probability: 1.256590634384453e-276,
                  },
                  {
                    topicId: 39,
                    probability: 4.962281604765006e-264,
                  },
                  {
                    topicId: 40,
                    probability: 1.4934481058578256e-9,
                  },
                  {
                    topicId: 41,
                    probability: 8.884568813093841e-264,
                  },
                  {
                    topicId: 42,
                    probability: 5.013800688994681e-22,
                  },
                  {
                    topicId: 43,
                    probability: 0.000026470114161619295,
                  },
                  {
                    topicId: 44,
                    probability: 9.985162844238746e-278,
                  },
                  {
                    topicId: 45,
                    probability: 2.270165398989171e-23,
                  },
                  {
                    topicId: 46,
                    probability: 3.2736175314630683e-264,
                  },
                  {
                    topicId: 47,
                    probability: 3.6088469485108315e-21,
                  },
                  {
                    topicId: 48,
                    probability: 3.6028957045370074e-16,
                  },
                  {
                    topicId: 49,
                    probability: 1.8164645377923458e-23,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.610000",
                heat: 0.6544194835187906,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.309000",
                heat: 0.6237665336972497,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.753000",
                heat: 0.7201343690951081,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.657000",
                heat: 0.7673735040940584,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.449000",
                heat: 0.8857862691580937,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.491000",
                heat: 0.8328784379592694,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.188000",
                heat: 1.369515011547344,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.1",
            slug: "1-1",
            description: "Overview Text Mining and Analytics - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.1+Overview+Text+Mining+and+Analytics+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/7zA4L/7-1-overview-text-mining-and-analytics-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.0962723803933079,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.683000",
                heat: 0.5909891400058702,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.380000",
                heat: 0.6091869680070443,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:06.250000",
                heat: 0.47534487819195775,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:06.253000",
                heat: 0.42882301144702084,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.260000",
                heat: 0.543880246551218,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.040000",
                heat: 0.5534194305840916,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.420000",
                heat: 0.41678896389785736,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.580000",
                heat: 0.5388905195186381,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.725000",
                heat: 0.47417082477252714,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.360000",
                heat: 0.49897270325799825,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.870000",
                heat: 0.6000880540064573,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.1",
            slug: "2-1",
            description: "Syntagmatic Relation Discovery - Entropy",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.1+Syntagmatic+Relation+Discovery+-+Entropy.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/qGZrA/8-1-syntagmatic-relation-discovery-entropy",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.250000",
                heat: 1.2716627634660422,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.140000",
                heat: 1.1503512880562061,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.400000",
                heat: 1.0299765807962529,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.680000",
                heat: 1.4651053864168617,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.850000",
                heat: 1.2810304449648713,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.620000",
                heat: 0.9873536299765808,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.310000",
                heat: 0.980327868852459,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.960000",
                heat: 0.926463700234192,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.040000",
                heat: 0.9578454332552693,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:04.850000",
                heat: 1.2997658079625294,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.650000",
                heat: 1.3967213114754098,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.2",
            slug: "2-2",
            description: "Syntagmatic Relation Discovery - Conditional Entropy",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.2+Syntagmatic+Relation+Discovery+-+Conditional+Entropy.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/ZAjmz/8-2-syntagmatic-relation-discovery-conditional-entropy",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.239816700610998,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.020000",
                heat: 1.1481670061099796,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.810000",
                heat: 1.1985743380855398,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.420000",
                heat: 1.670061099796334,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:05.510000",
                heat: 1.3233197556008147,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.180000",
                heat: 1.5183299389002036,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.900000",
                heat: 0.9404276985743381,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.410000",
                heat: 1.1069246435845215,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.120000",
                heat: 1.3447046843177188,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.050000",
                heat: 1.3716904276985744,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.110000",
                heat: 1.0692464358452138,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.070000",
                heat: 1.4923625254582484,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.3",
            slug: "2-3",
            description:
              "Syntagmatic Relation Discovery - Mutual Information Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.3+Syntagmatic+Relation+Discovery+-+Mutual+Information+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/b1ZFI/8-3-syntagmatic-relation-discovery-mutual-information-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.7675276752767528,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.930000",
                heat: 1.2973115445440169,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:05.476000",
                heat: 1.0347917764891934,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.580000",
                heat: 1.4533473906167633,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.058000",
                heat: 1.3837638376383763,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.220000",
                heat: 1.2171850289931472,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.520000",
                heat: 1.5376910911966262,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.110000",
                heat: 0.9910384818133896,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1.7526981237105e-311,
                  },
                  {
                    topicId: 3,
                    probability: 2.0363540154330254e-56,
                  },
                  {
                    topicId: 15,
                    probability: 1,
                  },
                  {
                    topicId: 16,
                    probability: 6.543031201304309e-287,
                  },
                  {
                    topicId: 17,
                    probability: 1.8087809930019618e-20,
                  },
                  {
                    topicId: 18,
                    probability: 1.450695989136057e-59,
                  },
                  {
                    topicId: 36,
                    probability: 7.795984821712783e-276,
                  },
                  {
                    topicId: 42,
                    probability: 1.1515038332656473e-253,
                  },
                  {
                    topicId: 45,
                    probability: 2.625207053e-315,
                  },
                  {
                    topicId: 49,
                    probability: 2.0454662e-316,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.110000",
                heat: 1.1671059567738535,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.600000",
                heat: 0.7580390089615182,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.560000",
                heat: 0.8450184501845018,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.670000",
                heat: 0.8961518186610438,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.010000",
                heat: 0.8265682656826568,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:02.020000",
                heat: 1.2366895097522403,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.4",
            slug: "2-4",
            description:
              "Syntagmatic Relation Discovery - Mutual Information Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.4+Syntagmatic+Relation+Discovery+-+Mutual+Information+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/8d6Wn/8-4-syntagmatic-relation-discovery-mutual-information-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.374785100286533,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.630000",
                heat: 0.966189111747851,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.060000",
                heat: 1.3908309455587393,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.310000",
                heat: 1.233810888252149,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.319000",
                heat: 1.2670487106017192,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.530000",
                heat: 0.8630372492836677,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.835000",
                heat: 0.9805157593123209,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01",
                heat: 0.7936962750716332,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.760000",
                heat: 0.9478510028653295,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.764000",
                heat: 0.7209169054441261,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.2",
            slug: "1-2",
            description: "Overview Text Mining and Analytics - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.2+Overview+Text+Mining+and+Analytics+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/hgSh4/7-2-overview-text-mining-and-analytics-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.266000",
                heat: 0.8483779971791255,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.875000",
                heat: 0.6290550070521862,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.480000",
                heat: 0.5989656793606017,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.610000",
                heat: 0.6255289139633287,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.620000",
                heat: 0.6013164080865068,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.630000",
                heat: 0.5832157968970381,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.600000",
                heat: 0.6081335213916315,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.960000",
                heat: 0.5275035260930888,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.480000",
                heat: 0.5112834978843441,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.680000",
                heat: 0.6189468735307946,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:06.675000",
                heat: 0.6466854724964739,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:07.140000",
                heat: 0.686412787964269,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.3",
            slug: "1-3",
            description: "Natural Language Content Analysis - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.3+Natural+Language+Content+Analysis+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/qNSPo/7-3-natural-language-content-analysis-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.300000",
                heat: 0.9738545816733067,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.160000",
                heat: 0.8580677290836654,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.378000",
                heat: 0.8309262948207171,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.690000",
                heat: 0.6919820717131474,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:06.170000",
                heat: 0.6797808764940239,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.337000",
                heat: 0.6312250996015937,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.250000",
                heat: 0.6879980079681275,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.980000",
                heat: 0.625,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.530000",
                heat: 0.8159860557768924,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.410000",
                heat: 0.5592629482071713,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:06.920000",
                heat: 0.512699203187251,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.790000",
                heat: 0.5831673306772909,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:04.770000",
                heat: 0.5712151394422311,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.4",
            slug: "1-4",
            description: "Natural Language Content Analysis - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.4+Natural+Language+Content+Analysis+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/07UZq/7-4-natural-language-content-analysis-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.266000",
                heat: 0.9456716417910448,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.493000",
                heat: 0.8301492537313433,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.960000",
                heat: 0.622089552238806,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.036000",
                heat: 0.7017910447761194,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.081000",
                heat: 0.5773134328358209,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.5",
            slug: "1-5",
            description: "Text Representation - Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.5+Text+Representation+-+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/6T38K/7-5-text-representation-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:07.540000",
                heat: 0.7171171171171171,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.390000",
                heat: 0.6954954954954955,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.620000",
                heat: 0.648048048048048,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.265000",
                heat: 0.5798798798798799,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.681000",
                heat: 0.6777777777777778,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.181000",
                heat: 0.651951951951952,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.039000",
                heat: 0.5912912912912913,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.435000",
                heat: 0.6168168168168168,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:06.150000",
                heat: 0.5216216216216216,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.780000",
                heat: 0.5774774774774775,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:04.220000",
                heat: 0.5684684684684684,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.6",
            slug: "1-6",
            description: "Text Representation - Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.6+Text+Representation+-+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/PK3Gd/7-6-text-representation-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.532000",
                heat: 0.8939917127071824,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.130000",
                heat: 0.7016574585635359,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.550000",
                heat: 0.5483425414364641,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.640000",
                heat: 0.5631906077348067,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.340000",
                heat: 0.6267265193370166,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.470000",
                heat: 0.575621546961326,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.240000",
                heat: 0.7026933701657458,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.099000",
                heat: 0.5787292817679558,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.510000",
                heat: 0.5566298342541437,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.310000",
                heat: 0.4703038674033149,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.7",
            slug: "1-7",
            description: "Word Association Mining and Analysis",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.7+Word+Association+Mining+and+Analysis.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/Uufkz/7-7-word-association-mining-and-analysis",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.1053698074974672,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03",
                heat: 0.7598784194528876,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.930000",
                heat: 0.6099290780141844,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.950000",
                heat: 0.8183046268152652,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:05.890000",
                heat: 0.9436001350894968,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.440000",
                heat: 0.7423167848699763,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.590000",
                heat: 0.8199932455251604,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.630000",
                heat: 0.8196555217831814,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.640000",
                heat: 0.5197568389057751,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.970000",
                heat: 0.5667004390408645,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.660000",
                heat: 0.6754474839581223,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.990000",
                heat: 0.547450185748058,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.070000",
                heat: 0.6055386693684566,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.801000",
                heat: 0.8696386355960825,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:02.240000",
                heat: 1.3215130023640662,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:02.810000",
                heat: 0.601823708206687,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.8",
            slug: "1-8",
            description: "Paradigmatic Relation Discovery Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.8+Paradigmatic+Relation+Discovery+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/wBtIp/7-8-paradigmatic-relation-discovery-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.2577319587628866,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.690000",
                heat: 0.8029782359679267,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.440000",
                heat: 0.9629629629629629,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.270000",
                heat: 1.0038182512409317,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:05.461000",
                heat: 1.0477281405116456,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.890000",
                heat: 1.2325315005727377,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.711000",
                heat: 1.13631156930126,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.045000",
                heat: 1.295914471172203,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.378000",
                heat: 1.8606338297059946,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.930000",
                heat: 1.1145475372279496,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.548000",
                heat: 1.023291332569683,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:04.550000",
                heat: 1.0339824360442917,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.010000",
                heat: 0.9083619702176403,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.150000",
                heat: 0.856815578465063,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:02.787000",
                heat: 0.5689194348988164,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 7.9",
            slug: "1-9",
            description: "Paradigmatic Relation Discovery Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/7.9+Paradigmatic+Relation+Discovery+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/CV8fN/7-9-paradigmatic-relation-discovery-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.7572229409228115,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.090000",
                heat: 1.6084519189305735,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.400000",
                heat: 1.2902112979732643,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.230000",
                heat: 0.8809831824062095,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.300000",
                heat: 1.0577835273824925,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.300000",
                heat: 1.2634756360500217,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.790000",
                heat: 1.5377317809400604,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:05.920000",
                heat: 1.2388960758947822,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.660000",
                heat: 1.0038809831824063,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.160000",
                heat: 1.1026304441569643,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:04.550000",
                heat: 0.858128503665373,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:05.810000",
                heat: 0.8184562311341095,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.890000",
                heat: 0.734368262181975,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:02.430000",
                heat: 1.0159551530832256,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:01.930000",
                heat: 0.7981888745148771,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:01.185000",
                heat: 0.7136696852091419,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:00.760000",
                heat: 0.728762397585166,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:03.068000",
                heat: 0.7257438551099612,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:02.900000",
                heat: 0,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:19:02.421000",
                heat: 0,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.5",
            slug: "2-5",
            description:
              "Topic Mining and Analysis - Motivation and Task Definition",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.5+Topic+Mining+and+Analysis+-+Motivation+and+Task+Definition.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/dmpQ0/8-5-topic-mining-and-analysis-motivation-and-task-definition",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.0913513513513513,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.350000",
                heat: 0.7567567567567568,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.470000",
                heat: 0.7151351351351352,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.800000",
                heat: 0.9183783783783783,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:05.340000",
                heat: 0.7183783783783784,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.712000",
                heat: 1.3232432432432433,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.730000",
                heat: 1.269189189189189,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.520000",
                heat: 0.7583783783783784,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.4",
            slug: "3-4",
            description:
              "Probabilistic Topic Models - Expectation-Maximization Algorithm Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.4+Probabilistic+Topic+Models+-+Expectation-Maximization+Algorithm+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/f82s5/9-4-probabilistic-topic-models-expectation-maximization-algorithm-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.333000",
                heat: 1.4846029173419772,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.870000",
                heat: 0.953808752025932,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.220000",
                heat: 1.0340356564019448,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.440000",
                heat: 1.1645056726094003,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.611000",
                heat: 0.793354943273906,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.930000",
                heat: 0.733387358184765,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.791000",
                heat: 0.7658022690437601,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.290000",
                heat: 0.7698541329011345,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.070000",
                heat: 0.9311183144246353,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.530000",
                heat: 1.4570502431118315,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.950000",
                heat: 1.3517017828200972,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.5",
            slug: "3-5",
            description:
              "Probabilistic Topic Models - Expectation-Maximization Algorithm Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.5+Probabilistic+Topic+Models+-+Expectation-Maximization+Algorithm+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/naLsv/9-5-probabilistic-topic-models-expectation-maximization-algorithm-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.9965217391304348,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.905000",
                heat: 1.5295652173913044,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:06.520000",
                heat: 1.2565217391304349,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.170000",
                heat: 1.2139130434782608,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.458000",
                heat: 1.2147826086956521,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.780000",
                heat: 1.7469565217391305,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.047000",
                heat: 1.4747826086956521,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.020000",
                heat: 1.3895652173913045,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.200000",
                heat: 0.9469565217391305,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.166000",
                heat: 0.9634782608695652,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.900000",
                heat: 0.9956521739130435,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.6",
            slug: "3-6",
            description:
              "Probabilistic Topic Models - Expectation-Maximization Algorithm Part 3",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.6+Probabilistic+Topic+Models+-+Expectation-Maximization+Algorithm+Part+3.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/N5cBh/9-6-probabilistic-topic-models-expectation-maximization-algorithm-part-3",
            buckets: [
              {
                id: 0,
                interval: "00:00:07.553000",
                heat: 1.0196779964221825,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.110000",
                heat: 0.9579606440071556,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.850000",
                heat: 0.8354203935599285,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.110000",
                heat: 1.073345259391771,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.689000",
                heat: 1,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.270000",
                heat: 1.295169946332737,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.140000",
                heat: 0.6207513416815742,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.7",
            slug: "3-7",
            description: "Probabilistic Latent Semantic Analysis (PLSA) Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.7+Probabilistic+Latent+Semantic+Analysis+(PLSA)+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/HKe8K/9-7-probabilistic-latent-semantic-analysis-plsa-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.854559748427673,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:05.150000",
                heat: 1.2814465408805031,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.220000",
                heat: 1.8223270440251573,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.730000",
                heat: 1.2358490566037736,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:06.913000",
                heat: 1.0770440251572326,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.150000",
                heat: 1.1643081761006289,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.630000",
                heat: 1.759433962264151,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.620000",
                heat: 1.6163522012578617,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.160000",
                heat: 2.145440251572327,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.350000",
                heat: 2.2586477987421385,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:05.200000",
                heat: 0.925314465408805,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.8",
            slug: "3-8",
            description: "Probabilistic Latent Semantic Analysis (PLSA) Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.8+Probabilistic+Latent+Semantic+Analysis+(PLSA)+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/GJyGG/9-8-probabilistic-latent-semantic-analysis-plsa-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.366000",
                heat: 2.0961538461538463,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.010000",
                heat: 2.604020979020979,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.420000",
                heat: 2.0603146853146854,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.619000",
                heat: 1.625,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.534000",
                heat: 1.6722027972027973,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:05.830000",
                heat: 1.090034965034965,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.250000",
                heat: 1.1433566433566433,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.680000",
                heat: 1.5157342657342658,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.660000",
                heat: 1.1835664335664335,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.540000",
                heat: 0.9265734265734266,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.146000",
                heat: 0.291958041958042,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.9",
            slug: "3-9",
            description: "Latent Dirichlet Allocation (LDA) Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.9+Latent+Dirichlet+Allocation+(LDA)+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/deiXc/9-9-latent-dirichlet-allocation-lda-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:07",
                heat: 1.1549053356282273,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.887000",
                heat: 1.0137693631669535,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.390000",
                heat: 0.9853700516351118,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.730000",
                heat: 1.0826161790017212,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:07.708000",
                heat: 0.6351118760757315,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.031000",
                heat: 1.216867469879518,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.875000",
                heat: 0.8416523235800344,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.365000",
                heat: 0.689328743545611,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.190000",
                heat: 0.7986230636833046,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.961000",
                heat: 0.7986230636833046,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.080000",
                heat: 0.31411359724612736,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.10",
            slug: "3-10",
            description: "Latent Dirichlet Allocation (LDA) Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.10+Latent+Dirichlet+Allocation+(LDA)+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/taJgZ/9-10-latent-dirichlet-allocation-lda-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.3721618953603159,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.630000",
                heat: 0.8884501480750246,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.120000",
                heat: 0.8608094768015795,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.285000",
                heat: 0.8943731490621916,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.400000",
                heat: 0.8756169792694966,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.470000",
                heat: 0.6663376110562685,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.960000",
                heat: 0.8065153010858835,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.800000",
                heat: 0.9200394866732478,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.345000",
                heat: 0.8173741362290227,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.240000",
                heat: 0.6140177690029615,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.720000",
                heat: 0.7038499506416585,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.650000",
                heat: 0.8479763079960513,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.6",
            slug: "2-6",
            description: "Topic Mining and Analysis - Term as Topic",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.6+Topic+Mining+and+Analysis+-+Term+as+Topic.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/A1bUb/8-6-topic-mining-and-analysis-term-as-topic",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.1751956652618905,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.603000",
                heat: 0.8320288982540638,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.050000",
                heat: 1.0228777844671884,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.990000",
                heat: 0.703792895845876,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.890000",
                heat: 0.8524984948826009,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.040000",
                heat: 1.1384708007224564,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.933000",
                heat: 0.8916315472606864,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.780000",
                heat: 1.0186634557495484,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.800000",
                heat: 0.5231788079470199,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.140000",
                heat: 0.7344972907886815,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.325000",
                heat: 0.9723058398555088,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.410000",
                heat: 0.5761589403973509,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.7",
            slug: "2-7",
            description:
              "Topic Mining and Analysis - Probabilistic Topic Models",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.7+Topic+Mining+and+Analysis+-+Probabilistic+Topic+Models.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/ai3kj/8-7-topic-mining-and-analysis-probabilistic-topic-models",
            buckets: [
              {
                id: 0,
                interval: "00:00:06.750000",
                heat: 1.156386292834891,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.600000",
                heat: 1.539563862928349,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.880000",
                heat: 0.9850467289719627,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.670000",
                heat: 0.8355140186915888,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.770000",
                heat: 1.0242990654205608,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.390000",
                heat: 1.9981308411214953,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.250000",
                heat: 1.1744548286604362,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.860000",
                heat: 1.3227414330218068,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.070000",
                heat: 1.335202492211838,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.430000",
                heat: 1.3333333333333333,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:04.690000",
                heat: 1.0292834890965732,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.480000",
                heat: 1.1214953271028036,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.840000",
                heat: 0.9912772585669782,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:03.960000",
                heat: 1.0461059190031152,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:04.999000",
                heat: 0.30467289719626167,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.8",
            slug: "2-8",
            description:
              "Probabilistic Topic Models - Overview of Statistical Language Models Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.8+Probabilistic+Topic+Models+-+Overview+of+Statistical+Language+Models+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/KaYeS/8-8-probabilistic-topic-models-overview-of-statistical-language-models-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.4189100459619173,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.430000",
                heat: 1.1950098489822718,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.240000",
                heat: 0.943532501641497,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.980000",
                heat: 0.9822718319107026,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.050000",
                heat: 0.8430728824688115,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.670000",
                heat: 1.4799737360472751,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.480000",
                heat: 0.8115561391989494,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.590000",
                heat: 1.1346027577150362,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:06.980000",
                heat: 0.6900853578463558,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.550000",
                heat: 1.1628365068942876,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.960000",
                heat: 0.5961917268548916,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 5.186170679973087e-259,
                  },
                  {
                    topicId: 1,
                    probability: 1.8175481858767694e-7,
                  },
                  {
                    topicId: 2,
                    probability: 5.6361362927089975e-263,
                  },
                  {
                    topicId: 3,
                    probability: 1.2559235426422658e-32,
                  },
                  {
                    topicId: 4,
                    probability: 2.3171663234938477e-28,
                  },
                  {
                    topicId: 5,
                    probability: 1.7997798075278557e-16,
                  },
                  {
                    topicId: 6,
                    probability: 1.0714481748939873e-19,
                  },
                  {
                    topicId: 7,
                    probability: 1.0562195295886952e-12,
                  },
                  {
                    topicId: 8,
                    probability: 0.0003521724231298906,
                  },
                  {
                    topicId: 9,
                    probability: 8.162449580710397e-24,
                  },
                  {
                    topicId: 10,
                    probability: 2.7879960094312855e-259,
                  },
                  {
                    topicId: 11,
                    probability: 4.2270196614667e-275,
                  },
                  {
                    topicId: 12,
                    probability: 1.1342874019012966e-23,
                  },
                  {
                    topicId: 13,
                    probability: 4.048391816142405e-16,
                  },
                  {
                    topicId: 14,
                    probability: 5.0443110235304674e-263,
                  },
                  {
                    topicId: 15,
                    probability: 1.470829527941207e-20,
                  },
                  {
                    topicId: 16,
                    probability: 4.454945312178686e-23,
                  },
                  {
                    topicId: 17,
                    probability: 7.1423297515886155e-12,
                  },
                  {
                    topicId: 18,
                    probability: 1.0931174716495022e-19,
                  },
                  {
                    topicId: 19,
                    probability: 3.3088905112752287e-15,
                  },
                  {
                    topicId: 20,
                    probability: 1.3469374546579495e-9,
                  },
                  {
                    topicId: 21,
                    probability: 5.176304726261421e-273,
                  },
                  {
                    topicId: 22,
                    probability: 4.0922196201618334e-16,
                  },
                  {
                    topicId: 23,
                    probability: 3.3031645605899604e-265,
                  },
                  {
                    topicId: 24,
                    probability: 2.839481541921084e-12,
                  },
                  {
                    topicId: 25,
                    probability: 1.0352078343043257e-251,
                  },
                  {
                    topicId: 26,
                    probability: 1.6408483986290674e-279,
                  },
                  {
                    topicId: 27,
                    probability: 1.4617242097410475e-16,
                  },
                  {
                    topicId: 28,
                    probability: 2.3608550597089537e-296,
                  },
                  {
                    topicId: 29,
                    probability: 5.913300809527309e-20,
                  },
                  {
                    topicId: 30,
                    probability: 3.926829225015558e-8,
                  },
                  {
                    topicId: 31,
                    probability: 7.849844724906594e-261,
                  },
                  {
                    topicId: 32,
                    probability: 3.336828623513146e-282,
                  },
                  {
                    topicId: 33,
                    probability: 1.559963137228433e-283,
                  },
                  {
                    topicId: 34,
                    probability: 2.5584425314167964e-288,
                  },
                  {
                    topicId: 35,
                    probability: 1.5046784899911277e-294,
                  },
                  {
                    topicId: 36,
                    probability: 2.1277615856446877e-20,
                  },
                  {
                    topicId: 37,
                    probability: 2.6394611405005254e-281,
                  },
                  {
                    topicId: 38,
                    probability: 3.008611213022172e-280,
                  },
                  {
                    topicId: 39,
                    probability: 3.3003892536421767e-267,
                  },
                  {
                    topicId: 40,
                    probability: 1.1301812354575199e-8,
                  },
                  {
                    topicId: 41,
                    probability: 4.295317763139847e-282,
                  },
                  {
                    topicId: 42,
                    probability: 1.7511728315779932e-27,
                  },
                  {
                    topicId: 43,
                    probability: 0.9996475938939616,
                  },
                  {
                    topicId: 44,
                    probability: 3.893888774978067e-281,
                  },
                  {
                    topicId: 45,
                    probability: 1.2989386332499887e-27,
                  },
                  {
                    topicId: 46,
                    probability: 3.648729725086078e-269,
                  },
                  {
                    topicId: 47,
                    probability: 7.639500793420817e-23,
                  },
                  {
                    topicId: 48,
                    probability: 5.409279677300545e-15,
                  },
                  {
                    topicId: 49,
                    probability: 1.2580432369170212e-26,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.9",
            slug: "2-9",
            description:
              "Probabilistic Topic Models - Overview of Statistical Language Models Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.9+Probabilistic+Topic+Models+-+Overview+of+Statistical+Language+Models+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/lCSNo/8-9-probabilistic-topic-models-overview-of-statistical-language-models-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.7566248256624826,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.850000",
                heat: 1.0725244072524407,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.528000",
                heat: 1.0753138075313808,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:06.860000",
                heat: 0.7754532775453278,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.330000",
                heat: 0.8716875871687587,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.780000",
                heat: 0.8619246861924686,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.250000",
                heat: 0.9114365411436541,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.860000",
                heat: 0.9351464435146444,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.160000",
                heat: 0.99581589958159,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.850000",
                heat: 1.2454672245467224,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:04.648000",
                heat: 1.1771269177126917,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:04.620000",
                heat: 1.1018131101813111,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.260000",
                heat: 1.1499302649930265,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 8.10",
            slug: "2-10",
            description: "Probabilistic Topic Models - Mining One Topic",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/8.10+Probabilistic+Topic+Models+-+Mining+One+Topic.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/1exQ5/8-10-probabilistic-topic-models-mining-one-topic",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.29093567251462,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.738000",
                heat: 1.327485380116959,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.480000",
                heat: 1.1432748538011697,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.420000",
                heat: 1.2017543859649122,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:05.360000",
                heat: 0.9130116959064327,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.230000",
                heat: 1.2880116959064327,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.698000",
                heat: 0.9144736842105263,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.030000",
                heat: 1.0482456140350878,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.978000",
                heat: 0.7821637426900585,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.178000",
                heat: 1.1498538011695907,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:04.415000",
                heat: 1.0138888888888888,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.385000",
                heat: 0.7441520467836257,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.680000",
                heat: 0.3340643274853801,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.1",
            slug: "3-1",
            description:
              "Probabilistic Topic Models - Mixture of Unigram Language Models",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.1+Probabilistic+Topic+Models+-+Mixture+of+Unigram+Language+Models.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/EbbsO/9-1-probabilistic-topic-models-mixture-of-unigram-language-models",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.171000",
                heat: 1.1695046439628483,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.390000",
                heat: 1.2964396284829722,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.050000",
                heat: 0.901702786377709,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 4.23840519069191e-261,
                  },
                  {
                    topicId: 1,
                    probability: 3.3549244954595965e-14,
                  },
                  {
                    topicId: 2,
                    probability: 1.776085775589869e-263,
                  },
                  {
                    topicId: 3,
                    probability: 1.1893693637850724e-23,
                  },
                  {
                    topicId: 4,
                    probability: 4.5070041433098045e-19,
                  },
                  {
                    topicId: 5,
                    probability: 2.181086528874389e-12,
                  },
                  {
                    topicId: 6,
                    probability: 5.354079417305033e-18,
                  },
                  {
                    topicId: 7,
                    probability: 3.6685861316059786e-11,
                  },
                  {
                    topicId: 8,
                    probability: 0.9999836339919463,
                  },
                  {
                    topicId: 9,
                    probability: 1.0027327088596744e-14,
                  },
                  {
                    topicId: 10,
                    probability: 2.0676157813433327e-257,
                  },
                  {
                    topicId: 11,
                    probability: 3.046392643227929e-273,
                  },
                  {
                    topicId: 12,
                    probability: 3.039091171813345e-20,
                  },
                  {
                    topicId: 13,
                    probability: 9.851552852822212e-16,
                  },
                  {
                    topicId: 14,
                    probability: 4.6043738807629935e-265,
                  },
                  {
                    topicId: 15,
                    probability: 4.0250052956227264e-19,
                  },
                  {
                    topicId: 16,
                    probability: 8.591524442495656e-17,
                  },
                  {
                    topicId: 17,
                    probability: 3.941342254405419e-11,
                  },
                  {
                    topicId: 18,
                    probability: 1.1026087970370362e-21,
                  },
                  {
                    topicId: 19,
                    probability: 1.1944958245405406e-12,
                  },
                  {
                    topicId: 20,
                    probability: 4.459572163641848e-12,
                  },
                  {
                    topicId: 21,
                    probability: 8.089668811887772e-270,
                  },
                  {
                    topicId: 22,
                    probability: 2.9110081027033996e-16,
                  },
                  {
                    topicId: 23,
                    probability: 2.1256475517793367e-266,
                  },
                  {
                    topicId: 24,
                    probability: 5.224017289292362e-15,
                  },
                  {
                    topicId: 25,
                    probability: 4.636774826310545e-242,
                  },
                  {
                    topicId: 26,
                    probability: 1.851330375676671e-275,
                  },
                  {
                    topicId: 27,
                    probability: 1.2429190592052145e-26,
                  },
                  {
                    topicId: 28,
                    probability: 9.772268034234151e-274,
                  },
                  {
                    topicId: 29,
                    probability: 1.0577084467347926e-23,
                  },
                  {
                    topicId: 30,
                    probability: 6.00261042479895e-17,
                  },
                  {
                    topicId: 31,
                    probability: 1.7501269269916005e-267,
                  },
                  {
                    topicId: 32,
                    probability: 2.006651683355571e-270,
                  },
                  {
                    topicId: 33,
                    probability: 9.969504429886754e-274,
                  },
                  {
                    topicId: 34,
                    probability: 2.5535700868591902e-278,
                  },
                  {
                    topicId: 35,
                    probability: 8.592185862383164e-272,
                  },
                  {
                    topicId: 36,
                    probability: 3.4834141816101386e-17,
                  },
                  {
                    topicId: 37,
                    probability: 1.2672020745253038e-267,
                  },
                  {
                    topicId: 38,
                    probability: 3.7173782264141964e-278,
                  },
                  {
                    topicId: 39,
                    probability: 9.579223847558582e-264,
                  },
                  {
                    topicId: 40,
                    probability: 9.072704277656108e-11,
                  },
                  {
                    topicId: 41,
                    probability: 3.5031076183576987e-264,
                  },
                  {
                    topicId: 42,
                    probability: 4.526193176378909e-23,
                  },
                  {
                    topicId: 43,
                    probability: 0.000016365833341826646,
                  },
                  {
                    topicId: 44,
                    probability: 2.691781774225156e-278,
                  },
                  {
                    topicId: 45,
                    probability: 3.884630730753114e-24,
                  },
                  {
                    topicId: 46,
                    probability: 8.493039014508815e-265,
                  },
                  {
                    topicId: 47,
                    probability: 2.205231722823467e-21,
                  },
                  {
                    topicId: 48,
                    probability: 8.278400687287732e-17,
                  },
                  {
                    topicId: 49,
                    probability: 2.5257380259935464e-24,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.800000",
                heat: 0.7515479876160991,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.760000",
                heat: 1.0139318885448916,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.050000",
                heat: 0.9527863777089783,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.610000",
                heat: 0.9938080495356038,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.460000",
                heat: 0.8746130030959752,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.330000",
                heat: 1.075077399380805,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.120000",
                heat: 1.2174922600619196,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:05.340000",
                heat: 0.9326625386996904,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.340000",
                heat: 1.008513931888545,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:04.720000",
                heat: 0.8072755417956656,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.2",
            slug: "3-2",
            description:
              "Probabilistic Topic Models - Mixture Model Estimation Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.2+Probabilistic+Topic+Models+-+Mixture+Model+Estimation+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/QnGYn/9-2-probabilistic-topic-models-mixture-model-estimation-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.6640316205533596,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.420000",
                heat: 1.524901185770751,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.670000",
                heat: 1.499604743083004,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.600000",
                heat: 1.1067193675889329,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.059000",
                heat: 1.3446640316205534,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.490000",
                heat: 1.5391304347826087,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.150000",
                heat: 1.5541501976284584,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.020000",
                heat: 1.5889328063241106,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.180000",
                heat: 1.7217391304347827,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.710000",
                heat: 1.358893280632411,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.754000",
                heat: 0.3438735177865613,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 9.3",
            slug: "3-3",
            description:
              "Probabilistic Topic Models - Mixture Model Estimation Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/9.3+Probabilistic+Topic+Models+-+Mixture+Model+Estimation+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/cMSgR/9-3-probabilistic-topic-models-mixture-model-estimation-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.552325581395349,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.370000",
                heat: 1.2200996677740863,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.410000",
                heat: 1.5249169435215948,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.070000",
                heat: 1.1569767441860466,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.130000",
                heat: 1.6046511627906976,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.240000",
                heat: 1.754983388704319,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.420000",
                heat: 1.2583056478405317,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.520000",
                heat: 1.1985049833887043,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.369000",
                heat: 0.2865448504983389,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.1",
            slug: "4-1",
            description: "Text Clustering - Motivation",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.1+Text+Clustering+-+Motivation.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/FcCdt/10-1-text-clustering-motivation",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 0.8468468468468469,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.250000",
                heat: 0.5315315315315315,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.360000",
                heat: 0.515970515970516,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1.1006993050326808e-261,
                  },
                  {
                    topicId: 1,
                    probability: 1.3468413182224741e-14,
                  },
                  {
                    topicId: 2,
                    probability: 5.094175877031424e-264,
                  },
                  {
                    topicId: 3,
                    probability: 1.1351595642782065e-23,
                  },
                  {
                    topicId: 4,
                    probability: 3.7975987409314114e-20,
                  },
                  {
                    topicId: 5,
                    probability: 6.439052045905437e-13,
                  },
                  {
                    topicId: 6,
                    probability: 3.4427331924036495e-19,
                  },
                  {
                    topicId: 7,
                    probability: 1.2557815280915346e-11,
                  },
                  {
                    topicId: 8,
                    probability: 0.9999979217159459,
                  },
                  {
                    topicId: 9,
                    probability: 1.8700454601845174e-15,
                  },
                  {
                    topicId: 10,
                    probability: 3.921200215869445e-257,
                  },
                  {
                    topicId: 11,
                    probability: 1.473443611460256e-271,
                  },
                  {
                    topicId: 12,
                    probability: 1.1113856967320342e-20,
                  },
                  {
                    topicId: 13,
                    probability: 4.9009224924206994e-17,
                  },
                  {
                    topicId: 14,
                    probability: 9.00504525997631e-266,
                  },
                  {
                    topicId: 15,
                    probability: 9.013649481771576e-20,
                  },
                  {
                    topicId: 16,
                    probability: 9.955356238399174e-20,
                  },
                  {
                    topicId: 17,
                    probability: 1.7247912055863861e-12,
                  },
                  {
                    topicId: 18,
                    probability: 3.195411794304046e-22,
                  },
                  {
                    topicId: 19,
                    probability: 5.6774059485025044e-12,
                  },
                  {
                    topicId: 20,
                    probability: 2.147303846703037e-13,
                  },
                  {
                    topicId: 21,
                    probability: 4.731544778462458e-270,
                  },
                  {
                    topicId: 22,
                    probability: 2.203919693870794e-16,
                  },
                  {
                    topicId: 23,
                    probability: 4.936687500060232e-267,
                  },
                  {
                    topicId: 24,
                    probability: 9.382912773777719e-15,
                  },
                  {
                    topicId: 25,
                    probability: 2.1946105734276313e-242,
                  },
                  {
                    topicId: 26,
                    probability: 8.004543432057218e-276,
                  },
                  {
                    topicId: 27,
                    probability: 4.3182985337924966e-27,
                  },
                  {
                    topicId: 28,
                    probability: 1.7292491881041885e-272,
                  },
                  {
                    topicId: 29,
                    probability: 1.3676289740756171e-25,
                  },
                  {
                    topicId: 30,
                    probability: 1.7507356847594126e-17,
                  },
                  {
                    topicId: 31,
                    probability: 1.093718890530722e-268,
                  },
                  {
                    topicId: 32,
                    probability: 1.2332607149309067e-271,
                  },
                  {
                    topicId: 33,
                    probability: 8.010702009092696e-275,
                  },
                  {
                    topicId: 34,
                    probability: 4.265395822079417e-279,
                  },
                  {
                    topicId: 35,
                    probability: 2.736008780216099e-272,
                  },
                  {
                    topicId: 36,
                    probability: 1.529996853046871e-17,
                  },
                  {
                    topicId: 37,
                    probability: 2.0462996112514057e-267,
                  },
                  {
                    topicId: 38,
                    probability: 2.1044437091923018e-278,
                  },
                  {
                    topicId: 39,
                    probability: 1.4949390272631671e-264,
                  },
                  {
                    topicId: 40,
                    probability: 7.121820460544194e-11,
                  },
                  {
                    topicId: 41,
                    probability: 3.833322570588199e-265,
                  },
                  {
                    topicId: 42,
                    probability: 2.008158971877957e-23,
                  },
                  {
                    topicId: 43,
                    probability: 0.0000020781919921598783,
                  },
                  {
                    topicId: 44,
                    probability: 1.1902553894441747e-279,
                  },
                  {
                    topicId: 45,
                    probability: 3.2527411531263824e-24,
                  },
                  {
                    topicId: 46,
                    probability: 1.2224236136108909e-265,
                  },
                  {
                    topicId: 47,
                    probability: 5.6611010918894425e-22,
                  },
                  {
                    topicId: 48,
                    probability: 1.442560874191459e-17,
                  },
                  {
                    topicId: 49,
                    probability: 1.7333743591474606e-24,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.300000",
                heat: 0.5061425061425061,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.870000",
                heat: 0.3923013923013923,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.380000",
                heat: 0.5741195741195741,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.480000",
                heat: 0.48894348894348894,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.860000",
                heat: 0.4799344799344799,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.290000",
                heat: 0.6027846027846028,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.960000",
                heat: 0.6748566748566749,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.320000",
                heat: 5.375102375102375,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 11.1",
            slug: "5-1",
            description:
              "Text Categorization - Discriminative Classifier Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/11.1+Text+Categorization+-+Discriminative+Classifier+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/kgKI9/11-1-text-categorization-discriminative-classifier-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.5301204819277108,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.670000",
                heat: 1.1590361445783133,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.720000",
                heat: 0.8686746987951808,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.080000",
                heat: 0.9192771084337349,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.230000",
                heat: 0.8180722891566266,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.390000",
                heat: 0.8650602409638555,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.980000",
                heat: 1.2819277108433735,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.120000",
                heat: 0.9481927710843373,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.494000",
                heat: 0.8698795180722891,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:04.220000",
                heat: 0.7325301204819277,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.957000",
                heat: 1.157831325301205,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.930000",
                heat: 1.1650602409638555,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.981000",
                heat: 0.8975903614457831,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.626000",
                heat: 1.1012048192771084,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:02.288000",
                heat: 1.0590361445783132,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:04.191000",
                heat: 0.8457831325301205,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:00.867000",
                heat: 0.9265060240963855,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:01.378000",
                heat: 1.0265060240963855,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                  {
                    topicId: 16,
                    probability: 3.5776191665246226e-288,
                  },
                  {
                    topicId: 17,
                    probability: 5.698472959325754e-33,
                  },
                  {
                    topicId: 19,
                    probability: 1.0130565090163998e-307,
                  },
                  {
                    topicId: 36,
                    probability: 9.545e-321,
                  },
                  {
                    topicId: 43,
                    probability: 3.773157832122336e-295,
                  },
                  {
                    topicId: 45,
                    probability: 1.6e-322,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:01.570000",
                heat: 1.044578313253012,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:19:01.680000",
                heat: 1.1397590361445784,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:20:01.394000",
                heat: 0.6277108433734939,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 11.2",
            slug: "5-2",
            description:
              "Text Categorization - Discriminative Classifier Part 2 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/11.2+Text+Categorization+-+Discriminative+Classifier+Part+2+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/L7dem/11-2-text-categorization-discriminative-classifier-part-2-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:07.290000",
                heat: 0.8085381630012937,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.360000",
                heat: 0.6675291073738681,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.390000",
                heat: 0.5756791720569211,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.740000",
                heat: 0.5950840879689522,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.850000",
                heat: 0.7115135834411385,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.630000",
                heat: 0.6610608020698577,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.540000",
                heat: 0.6196636481241915,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.740000",
                heat: 0.6015523932729625,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.418000",
                heat: 0.6675291073738681,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.900000",
                heat: 0.6597671410090556,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:04.700000",
                heat: 0.6429495472186287,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.990000",
                heat: 0.5937904269081501,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:04.860000",
                heat: 0.6791720569210866,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.414000",
                heat: 0.7943078913324709,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:03.013000",
                heat: 0.8551099611901681,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:02.850000",
                heat: 0.5782664941785253,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:02.119000",
                heat: 0.49288486416558863,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:02.705000",
                heat: 0.592496765847348,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:02.420000",
                heat: 0.5795601552393272,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:19:02.080000",
                heat: 0.7710219922380336,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:20:03.530000",
                heat: 0.49805950840879687,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:21:04.530000",
                heat: 0.5161707632600259,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:22:02.240000",
                heat: 0.6597671410090556,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:23:01.640000",
                heat: 0.6054333764553687,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:24:00.900000",
                heat: 0.6196636481241915,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:25:01.970000",
                heat: 0.5899094437257438,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:26:07.110000",
                heat: 0.46959896507115134,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:27:01.620000",
                heat: 0.610608020698577,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:28:04.830000",
                heat: 0.4644243208279431,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:29:01.070000",
                heat: 0.6222509702457956,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:30:03.450000",
                heat: 0.592496765847348,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:31:02.300000",
                heat: 0.517464424320828,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 11.3",
            slug: "5-3",
            description: "Text Categorization - Evaluation Part 1",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/11.3+Text+Categorization+-+Evaluation+Part+1.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/qudy6/11-3-text-categorization-evaluation-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 0.9354413702239789,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.550000",
                heat: 0.6021080368906456,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.820000",
                heat: 0.7444005270092227,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:03.570000",
                heat: 0.924901185770751,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.370000",
                heat: 0.7417654808959157,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.041000",
                heat: 1.303030303030303,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.200000",
                heat: 0.8050065876152833,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:05.960000",
                heat: 0.8023715415019763,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.860000",
                heat: 0.9169960474308301,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.210000",
                heat: 1.002635046113307,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.390000",
                heat: 1.5876152832674573,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.260000",
                heat: 1.2990777338603425,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:00.730000",
                heat: 1.0974967061923584,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.460000",
                heat: 1.2068511198945981,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:01.123000",
                heat: 0.2437417654808959,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 11.4",
            slug: "5-4",
            description: "Text Categorization - Evaluation Part 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/11.4+Text+Categorization+-+Evaluation+Part+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/Yxm53/11-4-text-categorization-evaluation-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.1575342465753424,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:06.380000",
                heat: 0.9136986301369863,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.860000",
                heat: 1.4232876712328768,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.390000",
                heat: 1.7712328767123289,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.660000",
                heat: 1.3356164383561644,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:06.398000",
                heat: 1.0506849315068494,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.680000",
                heat: 0.6835616438356165,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.140000",
                heat: 0.8917808219178082,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.230000",
                heat: 0.7945205479452054,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.570000",
                heat: 0.7383561643835617,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.220000",
                heat: 0.7671232876712328,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 2.9153629712455016e-261,
                  },
                  {
                    topicId: 1,
                    probability: 3.04767905720915e-15,
                  },
                  {
                    topicId: 2,
                    probability: 3.1347867791945855e-264,
                  },
                  {
                    topicId: 3,
                    probability: 8.785190510124273e-25,
                  },
                  {
                    topicId: 4,
                    probability: 1.5897794791421004e-19,
                  },
                  {
                    topicId: 5,
                    probability: 7.228155905773566e-13,
                  },
                  {
                    topicId: 6,
                    probability: 3.88177469359061e-18,
                  },
                  {
                    topicId: 7,
                    probability: 6.969605829160803e-12,
                  },
                  {
                    topicId: 8,
                    probability: 0.9999950374527379,
                  },
                  {
                    topicId: 9,
                    probability: 1.5206987121959175e-15,
                  },
                  {
                    topicId: 10,
                    probability: 3.1655821148902137e-257,
                  },
                  {
                    topicId: 11,
                    probability: 2.188703898120514e-271,
                  },
                  {
                    topicId: 12,
                    probability: 5.635365654111935e-21,
                  },
                  {
                    topicId: 13,
                    probability: 3.1580873425215953e-17,
                  },
                  {
                    topicId: 14,
                    probability: 1.3038742445346402e-265,
                  },
                  {
                    topicId: 15,
                    probability: 2.4230483286937225e-19,
                  },
                  {
                    topicId: 16,
                    probability: 1.871071084702412e-20,
                  },
                  {
                    topicId: 17,
                    probability: 1.1143994531423889e-11,
                  },
                  {
                    topicId: 18,
                    probability: 4.717432036925596e-23,
                  },
                  {
                    topicId: 19,
                    probability: 7.446405598265204e-13,
                  },
                  {
                    topicId: 20,
                    probability: 1.9210573029319746e-13,
                  },
                  {
                    topicId: 21,
                    probability: 1.3125176028075429e-269,
                  },
                  {
                    topicId: 22,
                    probability: 1.5951959810937952e-16,
                  },
                  {
                    topicId: 23,
                    probability: 1.1092270145495855e-266,
                  },
                  {
                    topicId: 24,
                    probability: 1.0553499352775592e-14,
                  },
                  {
                    topicId: 25,
                    probability: 9.268283277237237e-243,
                  },
                  {
                    topicId: 26,
                    probability: 7.842570313303907e-276,
                  },
                  {
                    topicId: 27,
                    probability: 9.045846735030996e-27,
                  },
                  {
                    topicId: 28,
                    probability: 1.719585038892129e-272,
                  },
                  {
                    topicId: 29,
                    probability: 1.288165094561706e-24,
                  },
                  {
                    topicId: 30,
                    probability: 1.241414593837706e-17,
                  },
                  {
                    topicId: 31,
                    probability: 7.409125719507809e-268,
                  },
                  {
                    topicId: 32,
                    probability: 1.008671897739923e-271,
                  },
                  {
                    topicId: 33,
                    probability: 2.515061644042579e-274,
                  },
                  {
                    topicId: 34,
                    probability: 7.39695001846966e-279,
                  },
                  {
                    topicId: 35,
                    probability: 3.689900398900991e-273,
                  },
                  {
                    topicId: 36,
                    probability: 2.720554249466099e-17,
                  },
                  {
                    topicId: 37,
                    probability: 2.168775786959555e-268,
                  },
                  {
                    topicId: 38,
                    probability: 5.896264954289154e-278,
                  },
                  {
                    topicId: 39,
                    probability: 2.5430506058701753e-264,
                  },
                  {
                    topicId: 40,
                    probability: 8.021210571437045e-11,
                  },
                  {
                    topicId: 41,
                    probability: 1.0733014970023845e-264,
                  },
                  {
                    topicId: 42,
                    probability: 3.462617778748153e-23,
                  },
                  {
                    topicId: 43,
                    probability: 0.000004962447261489078,
                  },
                  {
                    topicId: 44,
                    probability: 2.0048114603793658e-279,
                  },
                  {
                    topicId: 45,
                    probability: 1.8956806749855134e-24,
                  },
                  {
                    topicId: 46,
                    probability: 1.2285410661661223e-265,
                  },
                  {
                    topicId: 47,
                    probability: 1.3524131490662206e-22,
                  },
                  {
                    topicId: 48,
                    probability: 1.6321081607781542e-17,
                  },
                  {
                    topicId: 49,
                    probability: 1.1513294862639187e-24,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.2",
            slug: "4-2",
            description:
              "Text Clustering - Generative Probabilistic Models Part 1 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.2+Text+Clustering+-+Generative+Probabilistic+Models+Part+1+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/gJTFA/10-2-text-clustering-generative-probabilistic-models-part-1-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.217000",
                heat: 1.1116279069767443,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.460000",
                heat: 0.933953488372093,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.758000",
                heat: 1.1925581395348837,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.015000",
                heat: 1.0148837209302326,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:04.410000",
                heat: 0.8641860465116279,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.008000",
                heat: 0.998139534883721,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.969000",
                heat: 0.7655813953488372,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.880000",
                heat: 0.9562790697674418,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.950000",
                heat: 0.8539534883720931,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:04.643000",
                heat: 0.6586046511627907,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.363000",
                heat: 0.8130232558139535,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.315000",
                heat: 0.8511627906976744,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.414000",
                heat: 0.7590697674418605,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.520000",
                heat: 0.8651162790697674,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:03.600000",
                heat: 0.8855813953488372,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:02.480000",
                heat: 0.906046511627907,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:01.306000",
                heat: 0.3404651162790698,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.3",
            slug: "4-3",
            description:
              "Text Clustering - Generative Probabilistic Models Part 2 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.3+Text+Clustering+-+Generative+Probabilistic+Models+Part+2+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/V93Td/10-3-text-clustering-generative-probabilistic-models-part-2-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.069000",
                heat: 1.1708860759493671,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:04.020000",
                heat: 1.160337552742616,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.260000",
                heat: 0.9409282700421941,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.030000",
                heat: 0.8417721518987342,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.227000",
                heat: 1.3270042194092826,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.770000",
                heat: 1.139240506329114,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.840000",
                heat: 1.0232067510548524,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.870000",
                heat: 0.8997890295358649,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.090000",
                heat: 0.6824894514767933,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.4",
            slug: "4-4",
            description:
              "Text Clustering - Generative Probabilistic Models Part 3 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.4+Text+Clustering+-+Generative+Probabilistic+Models+Part+3+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/8Ki0H/10-4-text-clustering-generative-probabilistic-models-part-3-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.7161016949152543,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.860000",
                heat: 1.375,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.140000",
                heat: 0.9438559322033898,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.173000",
                heat: 0.9989406779661016,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.522000",
                heat: 0.9745762711864406,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.144000",
                heat: 1.3845338983050848,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.730000",
                heat: 1.5476694915254237,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.804000",
                heat: 1.4385593220338984,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.283000",
                heat: 1.6684322033898304,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.530000",
                heat: 1.2161016949152543,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.690000",
                heat: 1.4046610169491525,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.557000",
                heat: 1.5010593220338984,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.680000",
                heat: 1.9131355932203389,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:02.790000",
                heat: 0.8485169491525424,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:01.530000",
                heat: 0.9311440677966102,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.5",
            slug: "4-5",
            description: "Text Clustering - Similarity-based Approaches",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.5+Text+Clustering+-+Similarity-based+Approaches.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/PsyKR/10-5-text-clustering-similarity-based-approaches",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.231000",
                heat: 1.2647702407002188,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.055000",
                heat: 0.7286652078774617,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.810000",
                heat: 0.8085339168490153,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:04.180000",
                heat: 1.0929978118161925,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.470000",
                heat: 0.7188183807439825,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.401000",
                heat: 0.9409190371991247,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.800000",
                heat: 0.7319474835886215,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 8.79893496746898e-47,
                  },
                  {
                    topicId: 3,
                    probability: 3.835796325071576e-65,
                  },
                  {
                    topicId: 4,
                    probability: 8.2183e-320,
                  },
                  {
                    topicId: 5,
                    probability: 4.418931654904614e-303,
                  },
                  {
                    topicId: 6,
                    probability: 6.498412607931354e-275,
                  },
                  {
                    topicId: 13,
                    probability: 1.4765903e-316,
                  },
                  {
                    topicId: 15,
                    probability: 3.002931276496973e-48,
                  },
                  {
                    topicId: 16,
                    probability: 8.919768379772258e-50,
                  },
                  {
                    topicId: 17,
                    probability: 1.4183474770583295e-73,
                  },
                  {
                    topicId: 19,
                    probability: 1.3978730166617022e-56,
                  },
                  {
                    topicId: 22,
                    probability: 1,
                  },
                  {
                    topicId: 24,
                    probability: 6.70302441363e-312,
                  },
                  {
                    topicId: 32,
                    probability: 2.1546363673148605e-295,
                  },
                  {
                    topicId: 36,
                    probability: 1.1709706718812326e-66,
                  },
                  {
                    topicId: 40,
                    probability: 8.242721263210796e-307,
                  },
                  {
                    topicId: 43,
                    probability: 3.3544922040466905e-41,
                  },
                  {
                    topicId: 48,
                    probability: 1.430320218570773e-35,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.400000",
                heat: 0.87527352297593,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.990000",
                heat: 0.6783369803063457,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:03.370000",
                heat: 0.6783369803063457,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.120000",
                heat: 0.8435448577680525,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.530000",
                heat: 0.7811816192560175,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.363000",
                heat: 0.6991247264770241,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:03.020000",
                heat: 0.824945295404814,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:01.926000",
                heat: 0.7636761487964989,
                topicProbabilities: [
                  {
                    topicId: 49,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:03.510000",
                heat: 0.7516411378555798,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:04.970000",
                heat: 0.7035010940919038,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:00.800000",
                heat: 0.6936542669584245,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.6",
            slug: "4-6",
            description: "Text Clustering - Evaluation",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.6+Text+Clustering+-+Evaluation.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/tr0ir/10-6-text-clustering-evaluation",
            buckets: [
              {
                id: 0,
                interval: "00:00:00",
                heat: 1.0922222222222222,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.640000",
                heat: 0.7877777777777778,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.010000",
                heat: 0.72,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.380000",
                heat: 0.7555555555555555,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.225000",
                heat: 0.9222222222222223,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:07.140000",
                heat: 0.7133333333333334,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:03.110000",
                heat: 0.84,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.720000",
                heat: 0.8088888888888889,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:05.125000",
                heat: 0.7122222222222222,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:04.330000",
                heat: 1.0922222222222222,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.7",
            slug: "4-7",
            description: "Text Categorization - Motivation",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.7+Text+Categorization+-+Motivation.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/8tCQe/10-7-text-categorization-motivation",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.192000",
                heat: 0.956081081081081,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.813000",
                heat: 0.8986486486486487,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:03.461000",
                heat: 0.6880630630630631,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.660000",
                heat: 0.713963963963964,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.850000",
                heat: 0.6024774774774775,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:04.770000",
                heat: 0.49774774774774777,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.940000",
                heat: 0.5123873873873874,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.890000",
                heat: 0.6756756756756757,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.600000",
                heat: 0.47184684684684686,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.742000",
                heat: 0.6092342342342343,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:04.300000",
                heat: 0.5990990990990991,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.085000",
                heat: 0.5236486486486487,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.402000",
                heat: 0.6024774774774775,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:03.750000",
                heat: 0.625,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.680000",
                heat: 0.5765765765765766,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.8",
            slug: "4-8",
            description: "Text Categorization - Methods",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.8+Text+Categorization+-+Methods.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/KKDXC/10-8-text-categorization-methods",
            buckets: [
              {
                id: 0,
                interval: "00:00:06.863000",
                heat: 0.860981308411215,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.090000",
                heat: 0.7453271028037384,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.930000",
                heat: 0.6436915887850467,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.810000",
                heat: 0.7476635514018691,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.770000",
                heat: 0.8481308411214953,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:05.540000",
                heat: 0.6004672897196262,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.880000",
                heat: 0.8142523364485982,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:00.290000",
                heat: 0.7336448598130841,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:02.800000",
                heat: 1,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.120000",
                heat: 0.9299065420560748,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.680000",
                heat: 0.947429906542056,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:04.280000",
                heat: 0.9602803738317757,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 10.9",
            slug: "4-9",
            description:
              "Text Categorization - Generative Probabilistic Models",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/10.9+Text+Categorization+-+Generative+Probabilistic+Models.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/ZxnI1/10-9-text-categorization-generative-probabilistic-models",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.380110497237569,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.310000",
                heat: 0.8596685082872928,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:06.440000",
                heat: 0.7226519337016575,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.370000",
                heat: 1.0718232044198894,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:05.960000",
                heat: 1.022099447513812,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.270000",
                heat: 1.205524861878453,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:04.290000",
                heat: 0.8331491712707182,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.390000",
                heat: 0.9259668508287293,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.932000",
                heat: 0.8430939226519337,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.980000",
                heat: 1.0066298342541435,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:03.020000",
                heat: 0.9502762430939227,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.224000",
                heat: 0.8121546961325967,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:00.775000",
                heat: 0.7635359116022099,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.970000",
                heat: 1.0408839779005525,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:01.570000",
                heat: 1.3513812154696132,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:03.940000",
                heat: 1.5779005524861878,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:01.715000",
                heat: 1.441988950276243,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:01.140000",
                heat: 0.8243093922651934,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:00.850000",
                heat: 1.0773480662983426,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:19:06.420000",
                heat: 1.0751381215469613,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:20:01.670000",
                heat: 1.1204419889502761,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:21:03.443000",
                heat: 1.0961325966850828,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:22:02.080000",
                heat: 1.1359116022099447,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:23:02.683000",
                heat: 1.1922651933701658,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:24:03.755000",
                heat: 0.8729281767955801,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:25:01.800000",
                heat: 0.8453038674033149,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:26:03.590000",
                heat: 0.7093922651933702,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:27:01.493000",
                heat: 0.580110497237569,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:28:01.350000",
                heat: 0.5955801104972376,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:29:03.154000",
                heat: 0.7204419889502762,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:30:00.510000",
                heat: 0.574585635359116,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:31:00.079000",
                heat: 0.38011049723756907,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 11.5",
            slug: "5-5",
            description: "Opinion Mining and Sentiment Analysis - Motivation",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/11.5+Opinion+Mining+and+Sentiment+Analysis+-+Motivation.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/o93Yl/11-5-opinion-mining-and-sentiment-analysis-motivation",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 0.9558665231431647,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.495000",
                heat: 0.7761033369214209,
                topicProbabilities: [
                  {
                    topicId: 8,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.340000",
                heat: 0.6781485468245425,
                topicProbabilities: [
                  {
                    topicId: 27,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:07.660000",
                heat: 0.4897739504843918,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.310000",
                heat: 0.7158234660925726,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.830000",
                heat: 0.7793326157158235,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.484000",
                heat: 0.6146393972012917,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:04.340000",
                heat: 0.5597416576964478,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.420000",
                heat: 0.581270182992465,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.870000",
                heat: 0.465016146393972,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.460000",
                heat: 0.876210979547901,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:07.940000",
                heat: 0.39181916038751347,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:02.500000",
                heat: 0.534983853606028,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:03.550000",
                heat: 0.7319698600645855,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:05.120000",
                heat: 0.4930032292787944,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:00.978000",
                heat: 0.48008611410118407,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:00.248000",
                heat: 0.4790096878363832,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:04.540000",
                heat: 0.5866523143164694,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 12.7",
            slug: "6-7",
            description:
              "Contextual Text Mining - Mining Casual Topics with Time Series Supervision",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/12.7+Contextual+Text+Mining+-+Mining+Casual+Topics+with+Time+Series+Supervision.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/WDo7w/12-7-contextual-text-mining-mining-causal-topics-with-time-series-supervision",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.0346385542168675,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.390000",
                heat: 0.7680722891566265,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.440000",
                heat: 0.7951807228915663,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.400000",
                heat: 0.8343373493975904,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:04.640000",
                heat: 0.9186746987951807,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:05.230000",
                heat: 1.0256024096385543,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.590000",
                heat: 0.838855421686747,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.830000",
                heat: 0.5798192771084337,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.890000",
                heat: 0.6400602409638554,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.370000",
                heat: 0.9186746987951807,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.990000",
                heat: 0.7545180722891566,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:04.020000",
                heat: 0.7515060240963856,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:03.560000",
                heat: 0.8147590361445783,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:03",
                heat: 0.8253012048192772,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.440000",
                heat: 0.7078313253012049,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:05.580000",
                heat: 0.5421686746987951,
                topicProbabilities: [
                  {
                    topicId: 33,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:02.760000",
                heat: 0.5346385542168675,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:02.200000",
                heat: 0.8132530120481928,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:02.553000",
                heat: 0.5150602409638554,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:19:00.650000",
                heat: 0.40210843373493976,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 12.8",
            slug: "6-8",
            description: "Summary for Exam 2",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/12.8+Summary+for+Exam+2.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/7hOfP/12-8-summary-for-exam-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:06.910000",
                heat: 0.48545454545454547,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.988000",
                heat: 0.5454545454545454,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.510000",
                heat: 0.5436363636363636,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.835000",
                heat: 0.49454545454545457,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.890000",
                heat: 0.44545454545454544,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.960000",
                heat: 0.43454545454545457,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.400000",
                heat: 0.44545454545454544,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.110000",
                heat: 0.41818181818181815,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.822000",
                heat: 0.36727272727272725,
                topicProbabilities: [
                  {
                    topicId: 46,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.863000",
                heat: 0.4218181818181818,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.670000",
                heat: 0.4,
                topicProbabilities: [
                  {
                    topicId: 35,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.390000",
                heat: 0.3563636363636364,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:00.790000",
                heat: 0.5163636363636364,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:01.230000",
                heat: 0.4763636363636364,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:07.350000",
                heat: 0.3290909090909091,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:00.403000",
                heat: 0.4090909090909091,
                topicProbabilities: [
                  {
                    topicId: 21,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:00",
                heat: 0.49818181818181817,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:02.930000",
                heat: 0.5272727272727272,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:18:02.185000",
                heat: 0.3890909090909091,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 11.6",
            slug: "5-6",
            description:
              "Opinion Mining and Sentiment Analysis - Sentiment Classification",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/11.6+Opinion+Mining+and+Sentiment+Analysis+-+Sentiment+Classification.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/9zE5i/11-6-opinion-mining-and-sentiment-analysis-sentiment-classification",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.012000",
                heat: 1.4119718309859155,
                topicProbabilities: [
                  {
                    topicId: 18,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.590000",
                heat: 0.9518779342723005,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:04.066000",
                heat: 1.158450704225352,
                topicProbabilities: [
                  {
                    topicId: 5,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.840000",
                heat: 1.1901408450704225,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.700000",
                heat: 0.8427230046948356,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.930000",
                heat: 1.199530516431925,
                topicProbabilities: [
                  {
                    topicId: 39,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:06.820000",
                heat: 0.9424882629107981,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.940000",
                heat: 0.9107981220657277,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.350000",
                heat: 0.8943661971830986,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:00.890000",
                heat: 0.7676056338028169,
                topicProbabilities: [
                  {
                    topicId: 44,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.823000",
                heat: 0.82981220657277,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:04.263000",
                heat: 0.7582159624413145,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 11.7",
            slug: "5-7",
            description:
              "Opinion Mining and Sentiment Analysis - Ordinal Logistic Regression (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/11.7+Opinion+Mining+and+Sentiment+Analysis+-+Ordinal+Logistic+Regression+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/rlksh/11-7-opinion-mining-and-sentiment-analysis-ordinal-logistic-regression-optional",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.395121951219512,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:02.749000",
                heat: 1.3475609756097562,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:02.150000",
                heat: 1.1902439024390243,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.960000",
                heat: 1.0329268292682927,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.275000",
                heat: 1.4609756097560975,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.800000",
                heat: 1.1634146341463414,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.650000",
                heat: 1.2317073170731707,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:01.661000",
                heat: 1.8658536585365855,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.450000",
                heat: 1.7134146341463414,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:05.290000",
                heat: 1.2865853658536586,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.790000",
                heat: 1.525609756097561,
                topicProbabilities: [
                  {
                    topicId: 3,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.910000",
                heat: 1.5402439024390244,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:00.810000",
                heat: 1.1121951219512196,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.150000",
                heat: 0.8414634146341463,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 12.1",
            slug: "6-1",
            description:
              "Opinion Mining and Sentiment Analysis - Latent Aspect Rating Analysis Part 1 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/12.1+Opinion+Mining+and+Sentiment+Analysis+-+Latent+Aspect+Rating+Analysis+Part+1+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/dkntE/12-1-opinion-mining-and-sentiment-analysis-latent-aspect-rating-analysis-part-1",
            buckets: [
              {
                id: 0,
                interval: "00:00:01.226000",
                heat: 1.1946564885496183,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 2.9392750469340912e-261,
                  },
                  {
                    topicId: 1,
                    probability: 1.765799885359003e-15,
                  },
                  {
                    topicId: 2,
                    probability: 1.193057755678288e-265,
                  },
                  {
                    topicId: 3,
                    probability: 7.504884470606587e-24,
                  },
                  {
                    topicId: 4,
                    probability: 3.089412726326994e-19,
                  },
                  {
                    topicId: 5,
                    probability: 4.1395386483377825e-13,
                  },
                  {
                    topicId: 6,
                    probability: 2.195125855910126e-18,
                  },
                  {
                    topicId: 7,
                    probability: 5.534852723397864e-13,
                  },
                  {
                    topicId: 8,
                    probability: 0.9999958543013062,
                  },
                  {
                    topicId: 9,
                    probability: 1.4437092170737679e-15,
                  },
                  {
                    topicId: 10,
                    probability: 7.516619389460822e-257,
                  },
                  {
                    topicId: 11,
                    probability: 2.4034819761086754e-271,
                  },
                  {
                    topicId: 12,
                    probability: 1.242020561995239e-20,
                  },
                  {
                    topicId: 13,
                    probability: 2.551434411691136e-16,
                  },
                  {
                    topicId: 14,
                    probability: 1.0081776356643289e-265,
                  },
                  {
                    topicId: 15,
                    probability: 2.046900598103348e-19,
                  },
                  {
                    topicId: 16,
                    probability: 2.780538971661771e-17,
                  },
                  {
                    topicId: 17,
                    probability: 5.682163756895942e-12,
                  },
                  {
                    topicId: 18,
                    probability: 8.500528090330303e-22,
                  },
                  {
                    topicId: 19,
                    probability: 2.710029954022139e-12,
                  },
                  {
                    topicId: 20,
                    probability: 1.5242380912930713e-12,
                  },
                  {
                    topicId: 21,
                    probability: 1.7187508809502312e-269,
                  },
                  {
                    topicId: 22,
                    probability: 1.4050254827109667e-16,
                  },
                  {
                    topicId: 23,
                    probability: 3.4324747042623444e-267,
                  },
                  {
                    topicId: 24,
                    probability: 1.4989109628852317e-15,
                  },
                  {
                    topicId: 25,
                    probability: 4.0195648324772167e-243,
                  },
                  {
                    topicId: 26,
                    probability: 3.857283239835532e-276,
                  },
                  {
                    topicId: 27,
                    probability: 5.322754839217153e-27,
                  },
                  {
                    topicId: 28,
                    probability: 4.579621447145238e-274,
                  },
                  {
                    topicId: 29,
                    probability: 7.775065867440337e-24,
                  },
                  {
                    topicId: 30,
                    probability: 2.0865099894557063e-18,
                  },
                  {
                    topicId: 31,
                    probability: 4.483162811060185e-271,
                  },
                  {
                    topicId: 32,
                    probability: 2.5039429042642146e-271,
                  },
                  {
                    topicId: 33,
                    probability: 2.946412747175431e-274,
                  },
                  {
                    topicId: 34,
                    probability: 3.5053334765107174e-279,
                  },
                  {
                    topicId: 35,
                    probability: 5.853040942031398e-273,
                  },
                  {
                    topicId: 36,
                    probability: 3.6397531238235415e-18,
                  },
                  {
                    topicId: 37,
                    probability: 1.995511409290028e-267,
                  },
                  {
                    topicId: 38,
                    probability: 5.232943761365688e-278,
                  },
                  {
                    topicId: 39,
                    probability: 2.71261092347911e-264,
                  },
                  {
                    topicId: 40,
                    probability: 7.596276285181815e-11,
                  },
                  {
                    topicId: 41,
                    probability: 1.0354169121673068e-264,
                  },
                  {
                    topicId: 42,
                    probability: 2.1711724848666088e-23,
                  },
                  {
                    topicId: 43,
                    probability: 0.00000414561184197576,
                  },
                  {
                    topicId: 44,
                    probability: 3.596106368552044e-279,
                  },
                  {
                    topicId: 45,
                    probability: 3.373871524196554e-24,
                  },
                  {
                    topicId: 46,
                    probability: 7.388879292064195e-266,
                  },
                  {
                    topicId: 47,
                    probability: 2.924552445390534e-23,
                  },
                  {
                    topicId: 48,
                    probability: 1.0661964653334717e-17,
                  },
                  {
                    topicId: 49,
                    probability: 1.895860420583331e-24,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.130000",
                heat: 1.083969465648855,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:05.230000",
                heat: 0.8753180661577609,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.760000",
                heat: 1.3231552162849873,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:02.921000",
                heat: 1.3244274809160306,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:00.118000",
                heat: 1.8206106870229009,
                topicProbabilities: [
                  {
                    topicId: 6,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:05.470000",
                heat: 1.5674300254452926,
                topicProbabilities: [
                  {
                    topicId: 28,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:05.640000",
                heat: 1.563613231552163,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.010000",
                heat: 1.2353689567430026,
                topicProbabilities: [
                  {
                    topicId: 19,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.942000",
                heat: 1.8358778625954197,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:01.640000",
                heat: 1.4427480916030535,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.040000",
                heat: 1.2455470737913485,
                topicProbabilities: [
                  {
                    topicId: 22,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:00.040000",
                heat: 1.6628498727735368,
                topicProbabilities: [
                  {
                    topicId: 36,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:04",
                heat: 1.4541984732824427,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:00.145000",
                heat: 1.6717557251908397,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:05.139000",
                heat: 0.25699745547073793,
                topicProbabilities: [
                  {
                    topicId: 43,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 12.2",
            slug: "6-2",
            description:
              "Opinion Mining and Sentiment Analysis - Latent Aspect Rating Analysis Part 2 (OPTIONAL)",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/12.2+Opinion+Mining+and+Sentiment+Analysis+-+Latent+Aspect+Rating+Analysis+Part+2+(OPTIONAL).mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/OxeOx/12-2-opinion-mining-and-sentiment-analysis-latent-aspect-rating-analysis-part-2",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.417952314165498,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.592000",
                heat: 1.1697054698457223,
                topicProbabilities: [
                  {
                    topicId: 2,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:00.070000",
                heat: 1.0168302945301544,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:05.490000",
                heat: 0.9158485273492286,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.190000",
                heat: 0.7237026647966339,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.590000",
                heat: 0.9761570827489481,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:01.010000",
                heat: 0.7208976157082749,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:02.020000",
                heat: 1.0785413744740533,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:01.940000",
                heat: 0.8681626928471248,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.020000",
                heat: 0.697054698457223,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.600000",
                heat: 0.7419354838709677,
                topicProbabilities: [
                  {
                    topicId: 40,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:02.270000",
                heat: 0.6549789621318373,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.870000",
                heat: 0.761570827489481,
                topicProbabilities: [
                  {
                    topicId: 15,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:02.120000",
                heat: 0.7082748948106592,
                topicProbabilities: [
                  {
                    topicId: 26,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:04.370000",
                heat: 0.5189340813464236,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 12.3",
            slug: "6-3",
            description: "Text-Based Prediction",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/12.3+Text-Based+Prediction.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/u8NLS/12-3-text-based-prediction",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 0.9556451612903226,
                topicProbabilities: [
                  {
                    topicId: 32,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:05",
                heat: 0.7782258064516129,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:05.850000",
                heat: 0.646505376344086,
                topicProbabilities: [
                  {
                    topicId: 13,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:02.610000",
                heat: 0.5954301075268817,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:00.900000",
                heat: 0.6747311827956989,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:03.063000",
                heat: 0.5967741935483871,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.630000",
                heat: 0.8172043010752689,
                topicProbabilities: [
                  {
                    topicId: 29,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.390000",
                heat: 0.717741935483871,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:03.020000",
                heat: 0.6505376344086021,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.120000",
                heat: 0.8131720430107527,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.395000",
                heat: 0.7983870967741935,
                topicProbabilities: [
                  {
                    topicId: 38,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:01.465000",
                heat: 1.0940860215053763,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 12.4",
            slug: "6-4",
            description: "Contextual Text Mining - Motivation",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/12.4+Contextual+Text+Mining+-+Motivation.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/eJt9Y/12-4-contextual-text-mining-motivation",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.160000",
                heat: 0.9676470588235294,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:01.740000",
                heat: 0.8161764705882353,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:05.880000",
                heat: 0.7088235294117647,
                topicProbabilities: [
                  {
                    topicId: 42,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.620000",
                heat: 0.5691176470588235,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:03.340000",
                heat: 0.711764705882353,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.780000",
                heat: 0.6529411764705882,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.720000",
                heat: 0.8279411764705882,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 12.5",
            slug: "6-5",
            description:
              "Contextual Text Mining - Contextual Probabilistic Latent Semantic Analysis",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/12.5+Contextual+Text+Mining+-+Contextual+Probabilistic+Latent+Semantic+Analysis.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/3bVa3/12-5-contextual-text-mining-contextual-probabilistic-latent-semantic-analysis",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.401000",
                heat: 1.238888888888889,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:03.150000",
                heat: 1.0138888888888888,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:01.330000",
                heat: 0.8444444444444444,
                topicProbabilities: [
                  {
                    topicId: 37,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:00.670000",
                heat: 1.0472222222222223,
                topicProbabilities: [
                  {
                    topicId: 12,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.550000",
                heat: 0.7791666666666667,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:01.560000",
                heat: 0.8888888888888888,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:00.980000",
                heat: 0.8763888888888889,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:03.925000",
                heat: 0.7652777777777777,
                topicProbabilities: [
                  {
                    topicId: 47,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:00.200000",
                heat: 1.0416666666666667,
                topicProbabilities: [
                  {
                    topicId: 17,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:02.855000",
                heat: 0.725,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:00.340000",
                heat: 0.8888888888888888,
                topicProbabilities: [
                  {
                    topicId: 11,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:03.640000",
                heat: 0.7041666666666667,
                topicProbabilities: [
                  {
                    topicId: 34,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:00.060000",
                heat: 0.6222222222222222,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:00.010000",
                heat: 0.8236111111111111,
                topicProbabilities: [
                  {
                    topicId: 23,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:05.530000",
                heat: 0.7680555555555556,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:15:04.290000",
                heat: 0.625,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:16:02.750000",
                heat: 0.5013888888888889,
                topicProbabilities: [
                  {
                    topicId: 4,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:17:00.764000",
                heat: 0.5944444444444444,
                topicProbabilities: [
                  {
                    topicId: 25,
                    probability: 1,
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            active: true,
            name: "Lesson 12.6",
            slug: "6-6",
            description:
              "Contextual Text Mining - Mining Topics with Social Network Context",
            videoUrl:
              "https://s3.us-east-2.amazonaws.com/smartmoocs.illinois.edu/textanalytics/12.6+Contextual+Text+Mining+-+Mining+Topics+with+Social+Network+Context.mp4",
            courseraUrl: "https://www.coursera.org/learn/cs-410/lecture/CMCyH/12-6-contextual-text-mining-mining-topics-with-social-network-context",
            buckets: [
              {
                id: 0,
                interval: "00:00:00.025000",
                heat: 1.043010752688172,
                topicProbabilities: [
                  {
                    topicId: 41,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:01:00.570000",
                heat: 1.0685483870967742,
                topicProbabilities: [
                  {
                    topicId: 0,
                    probability: 4.888945264107402e-261,
                  },
                  {
                    topicId: 1,
                    probability: 1.8353122509632372e-14,
                  },
                  {
                    topicId: 2,
                    probability: 2.9363111800417446e-264,
                  },
                  {
                    topicId: 3,
                    probability: 6.71594820370699e-24,
                  },
                  {
                    topicId: 4,
                    probability: 4.3441236319432935e-20,
                  },
                  {
                    topicId: 5,
                    probability: 7.174032380292683e-13,
                  },
                  {
                    topicId: 6,
                    probability: 6.0558941268650685e-18,
                  },
                  {
                    topicId: 7,
                    probability: 1.291122051061134e-11,
                  },
                  {
                    topicId: 8,
                    probability: 0.9999972301894325,
                  },
                  {
                    topicId: 9,
                    probability: 2.0680741842452933e-16,
                  },
                  {
                    topicId: 10,
                    probability: 1.9771725066535828e-256,
                  },
                  {
                    topicId: 11,
                    probability: 3.7902487419037506e-271,
                  },
                  {
                    topicId: 12,
                    probability: 1.6408955886000552e-20,
                  },
                  {
                    topicId: 13,
                    probability: 4.96646015627123e-16,
                  },
                  {
                    topicId: 14,
                    probability: 1.8923733187801044e-265,
                  },
                  {
                    topicId: 15,
                    probability: 6.778037824615934e-20,
                  },
                  {
                    topicId: 16,
                    probability: 5.887153143511471e-17,
                  },
                  {
                    topicId: 17,
                    probability: 2.402416285961331e-11,
                  },
                  {
                    topicId: 18,
                    probability: 8.384548080797133e-22,
                  },
                  {
                    topicId: 19,
                    probability: 1.5327946419206017e-12,
                  },
                  {
                    topicId: 20,
                    probability: 1.8254319259833184e-12,
                  },
                  {
                    topicId: 21,
                    probability: 2.1393577215979323e-269,
                  },
                  {
                    topicId: 22,
                    probability: 5.62800499342116e-16,
                  },
                  {
                    topicId: 23,
                    probability: 1.675394859292862e-266,
                  },
                  {
                    topicId: 24,
                    probability: 1.4935580831277033e-14,
                  },
                  {
                    topicId: 25,
                    probability: 2.6135064576989793e-242,
                  },
                  {
                    topicId: 26,
                    probability: 2.297273421090608e-276,
                  },
                  {
                    topicId: 27,
                    probability: 3.3430705628425184e-27,
                  },
                  {
                    topicId: 28,
                    probability: 1.2849588645576414e-272,
                  },
                  {
                    topicId: 29,
                    probability: 8.187261810311739e-24,
                  },
                  {
                    topicId: 30,
                    probability: 3.8408474064145276e-18,
                  },
                  {
                    topicId: 31,
                    probability: 1.6560601905576342e-267,
                  },
                  {
                    topicId: 32,
                    probability: 3.683653466308575e-272,
                  },
                  {
                    topicId: 33,
                    probability: 6.185483630029879e-274,
                  },
                  {
                    topicId: 34,
                    probability: 8.712869684598741e-279,
                  },
                  {
                    topicId: 35,
                    probability: 7.523410075761816e-273,
                  },
                  {
                    topicId: 36,
                    probability: 1.2672783182022455e-17,
                  },
                  {
                    topicId: 37,
                    probability: 3.122556087199202e-267,
                  },
                  {
                    topicId: 38,
                    probability: 1.2312603787810812e-277,
                  },
                  {
                    topicId: 39,
                    probability: 3.242586402071114e-264,
                  },
                  {
                    topicId: 40,
                    probability: 1.1133965476787001e-10,
                  },
                  {
                    topicId: 41,
                    probability: 1.1234410861336452e-264,
                  },
                  {
                    topicId: 42,
                    probability: 1.982203501083275e-23,
                  },
                  {
                    topicId: 43,
                    probability: 0.0000027696581821484316,
                  },
                  {
                    topicId: 44,
                    probability: 4.2743537001689906e-279,
                  },
                  {
                    topicId: 45,
                    probability: 4.0289133798630656e-24,
                  },
                  {
                    topicId: 46,
                    probability: 2.4500093531190363e-265,
                  },
                  {
                    topicId: 47,
                    probability: 3.7834953977817896e-22,
                  },
                  {
                    topicId: 48,
                    probability: 2.003729398565022e-17,
                  },
                  {
                    topicId: 49,
                    probability: 3.0126154733948652e-24,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:02:06.540000",
                heat: 1.043010752688172,
                topicProbabilities: [
                  {
                    topicId: 45,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:03:01.870000",
                heat: 0.9838709677419355,
                topicProbabilities: [
                  {
                    topicId: 1,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:04:01.490000",
                heat: 1.1720430107526882,
                topicProbabilities: [
                  {
                    topicId: 10,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:05:02.210000",
                heat: 1.1948924731182795,
                topicProbabilities: [
                  {
                    topicId: 9,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:06:02.130000",
                heat: 1.5147849462365592,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:07:05.540000",
                heat: 1.5685483870967742,
                topicProbabilities: [
                  {
                    topicId: 31,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:08:04.160000",
                heat: 1.48252688172043,
                topicProbabilities: [
                  {
                    topicId: 16,
                    probability: 1,
                  },
                  {
                    topicId: 42,
                    probability: 1.07385796325e-312,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:09:01.560000",
                heat: 1.6908602150537635,
                topicProbabilities: [
                  {
                    topicId: 20,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:10:02.260000",
                heat: 1.9059139784946237,
                topicProbabilities: [
                  {
                    topicId: 48,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:11:00.860000",
                heat: 1.0080645161290323,
                topicProbabilities: [
                  {
                    topicId: 24,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:12:01.780000",
                heat: 0.8454301075268817,
                topicProbabilities: [
                  {
                    topicId: 7,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:13:03.980000",
                heat: 0.7849462365591398,
                topicProbabilities: [
                  {
                    topicId: 14,
                    probability: 1,
                  },
                ],
              },
              {
                id: 0,
                interval: "00:14:01.010000",
                heat: 0.521505376344086,
                topicProbabilities: [
                  {
                    topicId: 30,
                    probability: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
