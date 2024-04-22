import { Grid } from "@mui/material";
import Percentage from "./Percentage";

export default function Skills({ active }) {
  return (
    <div className="aboutskills">
      <h1>SkILS</h1>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          {" "}
          <Percentage type={active} skill="Html & Css" Percentage="90" />
        </Grid>

        <Grid xs={12} md={6}>
          {" "}
          <Percentage
            type={active}
            skill="React JS (Redux, Next)"
            Percentage="90"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Percentage
            type={active}
            skill="JavaScript (ES5, ES6, ES7)"
            Percentage="90"
          />
        </Grid>

        <Grid xs={12} md={6}>
          <Percentage
            type={active}
            skill="Bootstrap & Tailwind & Mui"
            Percentage="90"
          />
        </Grid>

        <Grid xs={12} md={6}>
          <Percentage type={active} skill="REST Full API" Percentage="80" />
        </Grid>
        <Grid xs={12} md={6}>
          <Percentage type={active} skill="react query" Percentage="80" />
        </Grid>
        <Grid xs={12} md={6}>
          <Percentage
            type={active}
            skill="Tools(Npm, Git & GitHub, Yarn, Gitlab)"
            Percentage="80"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Percentage type={active} skill="TypeScript" Percentage="90" />
        </Grid>
        <Grid xs={12} md={6}>
          <Percentage
            type={active}
            skill="Formik & React Hook Form"
            Percentage="90"
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Percentage type={active} skill="Chart Js" Percentage="80" />
        </Grid>
        <Grid xs={12} md={6}>
          <Percentage type={active} skill="React Router Dom " Percentage="80" />
        </Grid>

        <Grid xs={12} md={6}>
          <Percentage type={active} skill="I18 next " Percentage="80" />
        </Grid>
      </Grid>
    </div>
  );
}
