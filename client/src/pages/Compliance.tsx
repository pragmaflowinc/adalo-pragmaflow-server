import { Typography } from "@mui/material";
import React from "react";

export function Compliance() {
  return (
    <div>
      <Typography variant="h1">Compliance</Typography>
      <Typography>
        If you are going to be build software using Adalo, or anything else for
        that matter, you are almost certainly required to adhere to some laws.
        These laws are complicated so I will try to explain in simple terms what
        they are and what you need to know.
      </Typography>
      <Typography> I will clean this up later, just copy pasted from a forum post I made. Here is a list of common compliance and regulations you need to know when designing software, and the implications with using Adalo</Typography>
      <ul>
        <li>GDPR - Impossible using Adalo. There are many, many reasons this is impossible, but let's start and end with the Data Center is in the USA so GDPR is a non-starter.</li>
        <li>HIPAA/HITECH - Impossible using Adalo. As already outlined in this thread. Adalo is not HIPAA so using Adalo cannot be HIPAA. Taking it one step further, HIPAA costs a lot of money. If 10,000 people are building TODO apps in Adalo on the pro plan at $50/month, and 3 people want to build HIPAA apps at the same $50/month, it does not make sense for Adalo to even consider obtaining a HIPAA certification.</li>
        <li>PCI DSS - Extremely difficult in Adalo. If you use the marketplace Stripe component you MUST be PCI compliant, but if you use the marketplace Stripe component you CANNOT be PCI compliant. If you implemented your own payment system that does not pass through Adalo, by say, using Custom Actions and your own Backend, they you could get to a point of being able to be PCI compliant.</li>
        <li>SOC/SOC1/SOC2/SOC3 - Extremely difficult using Adalo. To be compliant to these you would need to work directly with Adalo and have the full support of Adalo. As Adalo is not certified in SOC the chances of you succeeding with attaining one or all of these regulations are almost 0%.</li>
        <li>PIPEDA - Extremely difficult using Adalo. Adalo collects user information on your behalf without you knowing what information they collect or where it is stored. You would need to request Adalo to open their operating practice to be PIPEDA compliant.</li>
      </ul>
      <Typography>I am going to stop here, essentially if you need FISMA, FERPA, NIST CSF, NERC 1300, ISA/IEC 62443, LGPD, Australian Data Privacy Regulations, CCPA, ISO 27001/27002, etc…. certifications Adalo, and most no-code platforms are not for you.</Typography>
    </div>
  );
}
