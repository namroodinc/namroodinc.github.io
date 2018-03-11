import React from "react";
import PropTypes from "prop-types";

class Logo extends React.Component {
  render() {
    const { color, width } = this.props;

    return (
      <svg
        width={width}
        viewBox={`0 0 85 14`}
      >
        <g>
          <path
            d="m 1.1623114,1.2487759 q 0.2709333,0.016933 0.4910666,0.033867 0.2201333,0 0.4233333,0 0.2201333,0 0.4572,0 0.254,0 0.5757333,0 h 0.3556 q 0.1693333,0 0.6434666,0 0.4741333,0 0.9990666,0 0.5418667,-0.016933 1.016,-0.016933 0.4910666,0 0.6942666,0 0.5418666,0 0.9652,0.033867 0.4402666,0.033867 0.7789332,0.1185334 0.3386667,0.067733 0.6265333,0.1862666 0.2878667,0.1185334 0.5588,0.3048 0.6096001,0.4233333 0.9313331,1.0498666 0.338667,0.6265333 0.338667,1.4901333 0,0.5418666 -0.1524,1.0329333 -0.135467,0.4741333 -0.423333,0.8805332 -0.372534,0.508 -0.8805337,0.7958667 -0.508,0.2878666 -1.1006666,0.4233333 -0.5757333,0.1354666 -1.2022666,0.1693333 -0.6096,0.033867 -1.2192,0.033867 H 4.9384445 v 1.6763999 q 0,1.0329328 0.016933,1.6425328 0.033867,0.592667 0.1693334,0.9144 0.1524,0.321734 0.4402666,0.423334 0.2878667,0.08467 0.8297333,0.1016 v 0.6604 q -1.3207999,-0.0508 -2.6415999,-0.0508 -1.3038666,0 -2.5907998,0.0508 v -0.6604 q 0.4741333,-0.03387 0.7619999,-0.1016 0.2878667,-0.08467 0.4233333,-0.254 0.1524,-0.169334 0.2032,-0.4572 0.0508,-0.287867 0.0508,-0.778934 0.016933,-0.372533 0.016933,-0.728133 0,-0.3725332 0,-0.7450665 V 5.1603757 q 0,-0.5418666 0,-0.9313332 0,-0.3894667 -0.016933,-0.6604 0,-0.2878667 -0.016933,-0.4741333 Q 2.567778,2.9082425 2.5508446,2.7558425 2.4831113,2.2647759 2.1783113,2.1123759 1.8904447,1.9599759 1.1623114,1.8922426 Z M 4.9384445,7.158509 q 0.5418666,0 0.9313333,0 0.4064,-0.016933 0.7112,-0.0508 0.3047999,-0.0508 0.5418666,-0.1524 0.254,-0.1016 0.4910666,-0.2878667 0.508,-0.3894666 0.7450667,-0.9821333 0.2539999,-0.6095999 0.2539999,-1.3207999 0,-0.4233333 -0.084667,-0.7450666 Q 8.4436443,3.2977092 8.325111,3.0775758 8.223511,2.8405092 8.0880443,2.7050425 7.969511,2.5526425 7.867911,2.4679759 7.613911,2.2478426 7.3260444,2.1293092 7.0551111,2.0107759 6.6995111,1.9599759 6.3608444,1.9091759 5.9205778,1.9091759 5.4972445,1.8922426 4.9384445,1.8922426 Z"
            fill={color}
          />
          <path
            d="M 11.408046,6.3118423 Q 11.93298,6.193309 12.28858,6.1255757 q 0.3556,-0.084667 0.6604,-0.1693333 0.3048,-0.084667 0.626533,-0.1862667 0.338667,-0.1016 0.795867,-0.254 0.0508,0.1862667 0.08467,0.3048 0.03387,0.1185333 0.0508,0.2370667 0.01693,0.1185333 0.01693,0.2539999 0.01693,0.1354667 0.01693,0.3386667 0.592667,-0.4233333 1.1684,-0.762 0.575733,-0.3555999 1.1684,-0.3555999 0.5588,0 0.778933,0.3217333 0.220133,0.3217333 0.220133,0.6434666 0,0.3894666 -0.254,0.6773333 -0.254,0.2709333 -0.643466,0.2709333 -0.237067,0 -0.508,-0.1354666 -0.135467,-0.067733 -0.254,-0.1354667 -0.118533,-0.084667 -0.254,-0.1524 -0.2032,-0.084667 -0.389467,-0.084667 -0.321733,0 -0.5588,0.1862667 -0.220133,0.1862667 -0.423333,0.4064 v 3.6575997 q 0,0.508 0.01693,0.795867 0.03387,0.270933 0.135467,0.4064 0.118533,0.135466 0.321733,0.169333 0.220134,0.03387 0.6096,0.0508 v 0.592667 q -0.541866,-0.01693 -1.083733,-0.01693 -0.541867,-0.01693 -1.083733,-0.01693 -0.524934,0 -1.049867,0.01693 -0.524933,0 -1.049867,0.01693 v -0.592667 q 0.372534,0 0.592667,-0.0508 0.220133,-0.0508 0.338667,-0.2032 0.118533,-0.169333 0.135466,-0.4572 0.03387,-0.3048 0.03387,-0.8128 V 8.3269089 q 0,-0.3894666 -0.03387,-0.6096 -0.01693,-0.2370666 -0.135466,-0.4063999 -0.1016,-0.1693334 -0.321734,-0.3048 -0.220133,-0.1354667 -0.6096,-0.3217333 z"
            fill={color}
          />
          <path
            d="m 20.242578,8.9195755 q 0.01693,0.4910667 0.118533,1.1345335 0.1016,0.626533 0.575734,1.27 0.338666,0.491066 0.880533,0.762 0.5588,0.254 1.151467,0.254 0.508,0 0.880533,-0.135467 0.372533,-0.135467 0.626533,-0.321733 0.270933,-0.186267 0.440267,-0.4064 0.169333,-0.220134 0.287866,-0.389467 l 0.524934,0.237067 q -0.1524,0.254 -0.423334,0.626533 -0.254,0.3556 -0.694266,0.694267 -0.423334,0.338666 -1.0668,0.575733 -0.626533,0.237067 -1.507067,0.237067 -0.880533,0 -1.6256,-0.287867 -0.728133,-0.3048 -1.27,-0.829733 -0.524933,-0.524934 -0.829733,-1.236134 -0.287867,-0.7112 -0.287867,-1.5409328 0,-0.9821333 0.321734,-1.7271999 0.338666,-0.762 0.897466,-1.27 0.575734,-0.5249333 1.3208,-0.7789333 0.745067,-0.2709333 1.557867,-0.2709333 0.948267,0 1.608667,0.3217333 0.677333,0.3048 1.083733,0.7789333 0.423333,0.4572 0.6096,0.9990666 0.186266,0.5418667 0.186266,1.016 0,0.1862666 -0.06773,0.2370666 -0.06773,0.0508 -0.2032,0.0508 z m 2.709333,-0.7450666 q 0.1016,0 0.169334,-0.033867 0.08467,-0.033867 0.08467,-0.2201333 0,-0.1016 -0.01693,-0.3894666 -0.01693,-0.2878667 -0.135467,-0.5757333 -0.118533,-0.3048 -0.372533,-0.5418667 -0.254,-0.2370666 -0.7112,-0.2370666 -0.237067,0 -0.474133,0.1016 -0.237067,0.084667 -0.474134,0.2878666 -0.372533,0.3386667 -0.524933,0.762 -0.135467,0.4064 -0.220133,0.8466666 z"
            fill={color}
          />
          <path
            d="m 27.202179,10.545175 q 0.08467,0.270934 0.237066,0.677334 0.1524,0.389466 0.389467,0.762 0.254,0.372533 0.6096,0.643466 0.3556,0.254 0.846667,0.254 0.355599,0 0.609599,-0.118533 0.254,-0.118533 0.4064,-0.287867 0.169334,-0.186266 0.254,-0.4064 0.08467,-0.237066 0.08467,-0.440266 0,-0.237067 -0.1016,-0.4064 -0.08467,-0.186267 -0.321733,-0.338667 -0.237067,-0.169333 -0.626534,-0.3556 -0.389466,-0.2032 -0.965199,-0.474133 -0.321734,-0.1524002 -0.6604,-0.3386668 -0.338667,-0.1862667 -0.626534,-0.4402667 -0.270933,-0.2709333 -0.4572,-0.6434666 -0.169333,-0.3725333 -0.169333,-0.8974666 0,-0.4910667 0.186267,-0.8974666 0.2032,-0.4064 0.5588,-0.6942667 0.3556,-0.3048 0.846666,-0.4741333 0.508,-0.1693333 1.1176,-0.1693333 0.7112,0 1.253067,0.1524 0.5588,0.1524 1.083733,0.3386666 0.01693,0.2709333 0.03387,0.4741333 0.01693,0.2032 0.03387,0.4233333 0.03387,0.2201334 0.06773,0.4910667 0.0508,0.254 0.1016,0.6265333 l -0.508,0.033867 q -0.220134,-0.4064 -0.423334,-0.762 Q 30.859778,6.904509 30.622712,6.6335757 30.385645,6.3626423 30.097778,6.2102423 29.809912,6.0578424 29.454312,6.0578424 q -0.541867,0 -0.778933,0.3217333 -0.220134,0.3217333 -0.220134,0.6603999 0,0.3386667 0.135467,0.5418667 0.1524,0.1862666 0.338667,0.3217333 0.08467,0.067733 0.3556,0.2201333 0.270933,0.1354667 0.575733,0.2878667 0.3048,0.1524 0.575733,0.2878666 0.287867,0.1354667 0.4064,0.1862667 0.7112,0.3725333 1.134533,0.8466666 0.423334,0.4571995 0.423334,1.3207995 0,1.032934 -0.795867,1.710267 -0.795867,0.677333 -2.269066,0.677333 -0.541867,0 -0.982134,-0.08467 -0.423333,-0.08467 -0.778933,-0.2032 -0.338667,-0.135467 -0.592667,-0.270934 -0.254,-0.1524 -0.4572,-0.287866 0.01693,-0.270934 0.03387,-0.491067 0.01693,-0.220133 0.03387,-0.440267 0.01693,-0.237066 0.03387,-0.491066 0.01693,-0.270934 0.03387,-0.643467 z"
            fill={color}
          />
          <path
            d="m 33.915981,10.545175 q 0.08467,0.270934 0.237067,0.677334 0.1524,0.389466 0.389466,0.762 0.254,0.372533 0.6096,0.643466 0.3556,0.254 0.846667,0.254 0.3556,0 0.6096,-0.118533 0.254,-0.118533 0.4064,-0.287867 0.169333,-0.186266 0.254,-0.4064 0.08467,-0.237066 0.08467,-0.440266 0,-0.237067 -0.1016,-0.4064 -0.08467,-0.186267 -0.321733,-0.338667 -0.237067,-0.169333 -0.626533,-0.3556 -0.389467,-0.2032 -0.9652,-0.474133 -0.321733,-0.1524002 -0.6604,-0.3386668 -0.338667,-0.1862667 -0.626533,-0.4402667 -0.270934,-0.2709333 -0.4572,-0.6434666 -0.169334,-0.3725333 -0.169334,-0.8974666 0,-0.4910667 0.186267,-0.8974666 0.2032,-0.4064 0.5588,-0.6942667 0.3556,-0.3048 0.846667,-0.4741333 0.508,-0.1693333 1.1176,-0.1693333 0.711199,0 1.253066,0.1524 0.5588,0.1524 1.083733,0.3386666 0.01693,0.2709333 0.03387,0.4741333 0.01693,0.2032 0.03387,0.4233333 0.03387,0.2201334 0.06773,0.4910667 0.0508,0.254 0.1016,0.6265333 l -0.508,0.033867 q -0.220133,-0.4064 -0.423333,-0.762 Q 37.573581,6.904509 37.336514,6.6335757 37.099447,6.3626423 36.811581,6.2102423 36.523714,6.0578424 36.168114,6.0578424 q -0.541866,0 -0.778933,0.3217333 -0.220133,0.3217333 -0.220133,0.6603999 0,0.3386667 0.135466,0.5418667 0.1524,0.1862666 0.338667,0.3217333 0.08467,0.067733 0.3556,0.2201333 0.270933,0.1354667 0.575733,0.2878667 0.3048,0.1524 0.575733,0.2878666 0.287867,0.1354667 0.4064,0.1862667 0.7112,0.3725333 1.134534,0.8466666 0.423333,0.4571995 0.423333,1.3207995 0,1.032934 -0.795867,1.710267 -0.795866,0.677333 -2.269066,0.677333 -0.541867,0 -0.982133,-0.08467 -0.423334,-0.08467 -0.778934,-0.2032 -0.338666,-0.135467 -0.592666,-0.270934 -0.254,-0.1524 -0.4572,-0.287866 0.01693,-0.270934 0.03387,-0.491067 0.01693,-0.220133 0.03387,-0.440267 0.01693,-0.237066 0.03387,-0.491066 0.01693,-0.270934 0.03387,-0.643467 z"
            fill={color}
          />
          <path
            d="m 52.98466,1.2318426 q 0.1524,0.5418666 0.254,0.9144 0.1016,0.3725333 0.2032,0.7281333 0.118533,0.3386666 0.254,0.7281333 0.1524,0.3725333 0.3556,0.9313332 L 53.509593,4.7709091 Q 52.73066,3.7379758 52.27346,3.1622425 51.81626,2.5865092 51.46066,2.3325092 51.121993,2.0615759 50.783327,2.0107759 q -0.338667,-0.0508 -0.8636,-0.0508 H 48.92066 v 7.9586663 q 0,0.1693328 0,0.4233328 0,0.254 0,0.524934 0.01693,0.270933 0.01693,0.524933 0.01693,0.237067 0.0508,0.372533 0.0508,0.237067 0.1524,0.389467 0.118534,0.135467 0.321734,0.220133 0.2032,0.06773 0.524933,0.118534 0.321733,0.03387 0.8128,0.06773 v 0.643467 q -0.762,-0.03387 -1.540933,-0.0508 -0.762,-0.01693 -1.540933,-0.01693 -0.778934,0 -1.557867,0.01693 -0.762,0.01693 -1.540933,0.0508 v -0.643467 q 0.541866,-0.03387 0.897466,-0.06773 0.3556,-0.0508 0.5588,-0.135467 0.2032,-0.08467 0.287867,-0.237067 0.1016,-0.169333 0.135467,-0.4572 0.01693,-0.08467 0.01693,-0.287866 0.01693,-0.220134 0.01693,-0.474134 0.01693,-0.270933 0.01693,-0.541866 0,-0.270934 0,-0.5080002 V 1.9599759 h -1.202267 q -0.440267,0 -0.745067,0.0508 -0.3048,0.033867 -0.643466,0.3048 -0.338667,0.254 -0.8128,0.8297333 Q 42.67226,3.7210425 41.91026,4.7709091 L 41.368394,4.5338424 q 0.2032,-0.5249333 0.321733,-0.8974666 0.135467,-0.3725333 0.254,-0.7111999 0.118533,-0.3386667 0.220133,-0.7281333 0.118534,-0.3894667 0.287867,-0.9652 z"
            fill={color}
          />
          <path
            d="m 55.645262,5.4990424 q 0.829734,-0.016933 1.591734,0.254 0.778933,0.2709333 1.354666,0.7958666 0.592667,0.5249333 0.931333,1.2869333 0.3556,0.7450666 0.3556,1.6933332 0,0.9482665 -0.3556,1.6933335 -0.338666,0.728133 -0.931333,1.2192 -0.575733,0.491066 -1.3208,0.745066 -0.745066,0.254 -1.524,0.254 -0.9144,0 -1.693333,-0.287866 -0.778933,-0.3048 -1.354666,-0.829734 -0.5588,-0.524933 -0.880534,-1.253066 -0.3048,-0.728134 -0.3048,-1.6086668 0,-0.9652 0.3556,-1.6933333 0.372534,-0.7450666 0.9652,-1.2361332 0.592667,-0.508 1.3208,-0.762 0.745067,-0.254 1.490133,-0.2709333 z m 0.01693,0.6604 q -0.440267,0 -0.778934,0.2709333 -0.321733,0.2709333 -0.541866,0.7111999 -0.220134,0.4402667 -0.338667,1.0329333 -0.1016,0.5757333 -0.1016,1.2191999 0,0.6096002 0.1016,1.2192002 0.1016,0.6096 0.321733,1.100666 0.237067,0.474134 0.575734,0.778934 0.3556,0.3048 0.846666,0.3048 0.06773,0 0.3556,-0.0508 0.287867,-0.0508 0.592667,-0.3556 0.321733,-0.3048 0.5588,-0.948267 0.254,-0.6604 0.254,-1.8626665 0,-0.6773333 -0.118533,-1.3038666 Q 57.270862,7.6495756 57.033796,7.1754423 56.813662,6.701309 56.458062,6.4303757 56.119396,6.1594424 55.662196,6.1594424 Z"
            fill={color}
          />
          <path
            d="m 60.521534,6.3118423 q 0.524933,-0.1185333 0.880533,-0.1862666 0.3556,-0.084667 0.6604,-0.1693333 0.3048,-0.084667 0.626533,-0.1862667 0.338667,-0.1016 0.795867,-0.254 0.0508,0.1862667 0.08467,0.3048 0.03387,0.1185333 0.0508,0.2370667 0.01693,0.1185333 0.01693,0.2539999 0.01693,0.1354667 0.01693,0.3386667 0.592667,-0.4233333 1.1684,-0.762 0.575733,-0.3555999 1.1684,-0.3555999 0.5588,0 0.778933,0.3217333 0.220134,0.3217333 0.220134,0.6434666 0,0.3894666 -0.254,0.6773333 -0.254,0.2709333 -0.643467,0.2709333 -0.237067,0 -0.508,-0.1354666 -0.135467,-0.067733 -0.254,-0.1354667 -0.118533,-0.084667 -0.254,-0.1524 -0.2032,-0.084667 -0.389467,-0.084667 -0.321733,0 -0.5588,0.1862667 Q 63.9082,7.310909 63.705,7.5310423 v 3.6575997 q 0,0.508 0.01693,0.795867 0.03387,0.270933 0.135466,0.4064 0.118533,0.135466 0.321733,0.169333 0.220134,0.03387 0.6096,0.0508 v 0.592667 q -0.541866,-0.01693 -1.083733,-0.01693 -0.541866,-0.01693 -1.083733,-0.01693 -0.524933,0 -1.049867,0.01693 -0.524933,0 -1.049866,0.01693 v -0.592667 q 0.372533,0 0.592666,-0.0508 0.220134,-0.0508 0.338667,-0.2032 0.118533,-0.169333 0.135467,-0.4572 0.03387,-0.3048 0.03387,-0.8128 V 8.3269089 q 0,-0.3894666 -0.03387,-0.6096 Q 61.5714,7.4802423 61.452867,7.310909 61.351267,7.1415756 61.131134,7.006109 60.911,6.8706423 60.521534,6.6843757 Z"
            fill={color}
          />
          <path
            d="m 74.880995,11.578109 q -0.169334,0.220133 -0.4572,0.541866 -0.287867,0.321734 -0.728134,0.626534 -0.440266,0.287866 -1.0668,0.491066 -0.6096,0.220134 -1.456266,0.220134 -0.9652,0 -1.7272,-0.3048 -0.762,-0.321734 -1.303867,-0.8636 -0.524933,-0.541867 -0.8128,-1.253067 -0.270933,-0.728133 -0.270933,-1.5409332 0,-0.8297332 0.287867,-1.5578665 0.287866,-0.7450667 0.829733,-1.2869333 0.541867,-0.5588 1.337733,-0.8805333 0.795867,-0.3217333 1.794933,-0.3217333 0.728134,0 1.354667,0.1693333 0.626533,0.1524 1.083733,0.4233333 0.474134,0.254 0.728134,0.6096 0.270933,0.3556 0.270933,0.7450666 0,0.3725333 -0.254,0.6096 -0.237067,0.2370666 -0.6096,0.2370666 -0.3048,0 -0.6096,-0.1862666 -0.3048,-0.2032 -0.474133,-0.6096 -0.1016,-0.2032 -0.169334,-0.4064 -0.06773,-0.2201333 -0.186266,-0.4063999 -0.08467,-0.1185334 -0.3048,-0.3217334 -0.2032,-0.2031999 -0.694267,-0.2031999 -0.389467,0 -0.762,0.2201333 -0.372533,0.2201333 -0.6604,0.6095999 -0.287866,0.3725334 -0.4572,0.8974667 -0.169333,0.5249333 -0.169333,1.1514666 0,0.8466666 0.220133,1.4901331 0.237067,0.643467 0.6096,1.083733 0.389467,0.423334 0.880533,0.6604 0.491067,0.220134 1.016,0.220134 0.491067,0 0.8636,-0.135467 0.389467,-0.1524 0.6604,-0.338667 0.287867,-0.186266 0.474134,-0.389466 0.2032,-0.2032 0.3048,-0.338667 z"
            fill={color}
          />
          <path
            d="m 75.219731,1.4689093 q 0.592666,-0.1354667 0.982133,-0.2201334 0.4064,-0.1016 0.728133,-0.1862666 0.338667,-0.10160001 0.6604,-0.22013333 0.321733,-0.11853333 0.778933,-0.28786666 0.01693,0.38946665 0.01693,0.64346659 0.01693,0.254 0.01693,0.4910667 0,0.2201333 0,0.4910666 0.01693,0.2709333 0.01693,0.7112 v 3.6237331 q 0.541867,-0.4063999 1.1176,-0.7281333 0.575734,-0.3217333 1.3716,-0.3217333 0.287867,0 0.7112,0.084667 0.440267,0.084667 0.8636,0.4064 0.338667,0.2709333 0.524934,0.5926666 0.2032,0.3048 0.287866,0.6604 0.08467,0.3555999 0.1016,0.7789333 0.03387,0.4063999 0.03387,0.8805332 v 1.9642665 q 0,0.6096 0.01693,0.9652 0.01693,0.3556 0.118534,0.541867 0.1016,0.169333 0.321733,0.220133 0.237066,0.0508 0.643466,0.0508 v 0.592667 q -0.541866,-0.01693 -1.083733,-0.01693 -0.524933,0 -1.0668,0 -0.524933,0 -1.032933,0 -0.508,0 -1.032933,0.01693 v -0.592667 q 0.372533,0 0.575733,-0.03387 0.220133,-0.03387 0.321733,-0.237066 0.1016,-0.220134 0.118534,-0.677334 0.03387,-0.4572 0.03387,-1.303866 0,-0.9313335 -0.06773,-1.6425334 -0.0508,-0.7112 -0.220133,-1.2022667 -0.1524,-0.4910666 -0.440267,-0.7450666 -0.287867,-0.254 -0.762,-0.254 -0.440267,0 -0.8128,0.2370667 -0.3556,0.2370666 -0.643467,0.4741333 v 3.9115997 q 0,0.491067 0.01693,0.795867 0.01693,0.287866 0.118533,0.440266 0.1016,0.1524 0.321733,0.2032 0.220134,0.03387 0.626534,0.03387 v 0.592667 q -0.541867,-0.01693 -1.0668,-0.01693 -0.524934,0 -1.0668,0 -0.541867,0 -1.083733,0 -0.524934,0 -1.0668,0.01693 v -0.592667 q 0.220133,0 0.440266,-0.01693 0.220134,-0.01693 0.372534,-0.118534 0.1016,-0.06773 0.1524,-0.135466 0.06773,-0.08467 0.08467,-0.254 0.03387,-0.169334 0.03387,-0.474134 0.01693,-0.321733 0.01693,-0.880533 V 6.5150423 q 0,-0.9482666 -0.01693,-1.5070666 0,-0.5757333 0,-0.8805332 0,-0.3217334 0,-0.4572 0,-0.1524 0,-0.254 0,-0.3556 -0.06773,-0.5926666 -0.0508,-0.254 -0.186267,-0.4233334 -0.118533,-0.1693333 -0.321733,-0.2878666 -0.2032,-0.1185333 -0.508,-0.2201333 z"
            fill={color}
          />
        </g>
      </svg>
    );
  }
}

Logo.defaultProps = {
  color: '#FFFFFF',
  width: '100%'
}

Logo.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number
};

export default Logo;
