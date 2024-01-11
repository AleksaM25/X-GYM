import React from "react";
import "./Service.css";
import PersonIcon from "@mui/icons-material/Person";
import { ThemeProvider, createTheme } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CleanHandsIcon from "@mui/icons-material/CleanHands";

const icon = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "30%",
          height: "0%",
          color: "#f96d00",
        },
      },
    },
  },
});

const Service = () => {
  return (
    <div id="section-2" className="service">
      <div className="overlayMain">
        <div className="clanarina">
          <div className="info">
            <h1>CLANARINA</h1>
            <h2>
              MUSKA CLANARINA<i> 2200din.</i>
            </h2>
            <h2>
              KOMBO CLANARINA<i> 6500din. 3+1</i>
            </h2>
            <h2 style={{ paddingTop: "10px" }}>
              ZENSKA CLANARINA<i> 1700din.</i>
            </h2>
            <h2>
              KOMBO CLANARINA<i> 5100din. 3+1</i>
            </h2>
            <h2 style={{ paddingTop: "10px" }}>
              DNEVNI TRENING<i> 250din.</i>
            </h2>
          </div>
          <div className="info">
            <h1>RADNO VREME</h1>
            <h2>
              PONEDELJAK - PETAK <i> 08:00 - 23:00</i>
            </h2>
            <h2>
              SUBOTA - NEDELJA <i> 08:00 - 20:00</i>
            </h2>
          </div>
        </div>
        <div className="text">
          <div className="lorem">
            <ThemeProvider theme={icon}>
              <FitnessCenterIcon />
            </ThemeProvider>
            <h1>OPREMLJENOST</h1>
            <p>
              U X-GYM, znamo da je oprema važna za postizanje vaših fitnes
              ciljeva. Naša oprema je dizajnirana da Obezbedi maksimalnu
              efikasnost treninga, smanji rizik od povreda pruži vam ugodno i
              sigurno okruženje za vežbanje, naša kolekcija slobodnih tegova vam
              omogućava da prilagodite trening svojim individualnim potrebama,
              cardio oprema koja pomaže da poboljšate kondiciju i
              kardiovaskularno zdravlje.
            </p>
          </div>
          <div className="lorem">
            <h1 style={{ color: "#f96d00", fontSize: "8rem" }}>15</h1>
            <h1>GODINA</h1>
            <p>
              iskustva i posvećenosti vašoj dobrobiti X-GYM je ponosan što slavi
              15 godina uspešnog poslovanja. Tokom proteklih 15 godina, pomogli
              smo hiljadama ljudi da poboljšaju svoje zdravlje i kondiciju. Naš
              uspeh je zasnovan na našoj posvećenosti ka inovativnosti i
              zajedništvu
            </p>
          </div>
          <div className="lorem">
            <ThemeProvider theme={icon}>
              <PersonIcon />
            </ThemeProvider>
            <h1>STRUCNI TRENERI</h1>
            <p>
              Zaboravite na dvorane pune mašina i pogleda u prazno. U X-GYM, vas
              čeka više od teretane - čeka vas zajednica, podrška i stručno
              osoblje koje je tu da vas podigne na viši fitnes nivo. Naši
              treneri nisu samo instruktori; oni su partneri u transformaciji.
              Oni ne samo da znaju vežbe, oni razumeju vas. Počinju od vaših
              jedinstvenih ciljeva i fizičkih mogućnosti, pa vam prave
              personalizovan plan puta do željenog rezultata.
            </p>
          </div>
        </div>
        <div className="text">
          <div className="lorem">
            {/* <ThemeProvider theme={icon}>
              <DirectionsRunIcon />
            </ThemeProvider> */}
            <img src="img/logo-fitpass-blog.png" alt="" />
            {/* <h1>FITPASS</h1> */}
            <p>
              X-GYM je ponosan što predstavlja Fitpass, novi način da postignete
              svoje fitnes ciljeve. Fitpass je jedinstveni program koji vam
              omogućava da vežbate u našoj teretani kada god to poželite. Sa
              Fitpassom dobijate neograničen pristum našoj teretani kao i
              pristup svoj našoj opremi Fitpass je savršen izbor za sve koji
              žele da vežbaju redovno i da postignu svoje fitnes ciljeve.
            </p>
          </div>
          <div className="lorem">
            <ThemeProvider theme={icon}>
              <CleanHandsIcon />
            </ThemeProvider>
            <h1>ČISTOĆA JE KLJUČNA</h1>
            <p>
              X-GYM je ponosan što je poznat po čistoći. Naša teretana se
              redovno čisti i dezinfikuje kako bi se osiguralo da je bezbedna i
              ugodna za sve članove. Čista teretana smanjuje rizik od povreda:
              Kada je teretana čista, manja je verovatnoća da ćete pasti ili
              skliznuti i povredite se. Čista teretana poboljšava vaše
              raspoloženje: Kada se nalazite u čistom i urednom okruženju,
              osećate se prijatnije i motivisanije za vežbanje.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
