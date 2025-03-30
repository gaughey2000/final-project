import consultation from '../../src/media/consultation.png'
import harmony from '../../src/media/harmony.png'
import antiwrinkle from '../../src/media/anti-wrinkle.png'
import filler from '../../src/media/filler.png'
import peel from '../../src/media/peel.png'
import booster from '../../src/media/skin-booster.png'
import poly from '../../src/media/poly.png'
import care from '../../src/media/skin-care.png'

export const types = [
    // Consultation
    {
        name: 'Consultation',
        list: [
            {
                id: 1,
                name: 'Consultation',
                cost: 2000,
                time: 15
            },
            {
                id: 2,
                name: 'Consultation With Treatment',
                cost: 2000,
                time: 45
            },
        ],
        info: {
            full: ['Are you considering getting an aesthetics treatment, but unsure where to start? Our consultation service is a perfect solution for you!', 'Our registered nurse and independent perscriber will provide you with a personalised consultation to discuss your goals, concerns and desired outcomes. They will guide you through the different options avaiable, answer any questions you may have, and create a tailored treatment plan just for you.'],
            short: 'Medical aesthetic advice from  a nurse prescriber in a 15 minute appointment.',
            questions: [
                {
                    q: 'Should I attend make-up free?',
                    a: 'Yes, if possible. But do not worry too much as make-up can be removed during a consultation. It is better to come with a bare face in order to see what concerns you may have.'
                },
                {
                    q: 'Do I need to bring anything with me?',
                    a: 'Please bring any medication list, so we can perform a medical assessment. Please bring any photos of yourself from 5-10 years ago so we can assess how your face changes with age.'
                }
            ]
        },
        promo: {img: consultation}
    },
    // Anti-wrinkle
    {
        name: 'Anti-Wrinkle',
        list: [
            {
                id: 3,
                name: '1 Area',
                cost: 15000,
                time: 30
            },
            {
                id: 4,
                name: '2 Areas',
                cost: 20000,
                time: 30
            },
            {
                id: 5,
                name: '3 Areas',
                cost: 25000,
                time: 30
            },
            {
                id: 6,
                name: 'Other',
                cost: 5500,
                time: 30
            },
        ],
        info: {
            full: [
                'As we age the collagen and elsticity in our skin reduces. Bone structure changes and muscles become more active. This combination results in facial aging and formation of lines and wrinkles.', 
                'Botox is a wrinkle wrlaxing injection which can be used to treat lines and wirnkles. This product slows communication between the nerve impulses and the muscles.',
                'It is a safe and effective treatment'
            ],
            short: 'Reduce fine lines with anti-wrinkle injections.',
            questions: [
                {
                    q: 'Does it hurt?',
                    a: 'Slight discomfort but it is a relativly pain-free series of tiny injections to the treated area.'
                },
                {
                    q: 'Will I bruise?',
                    a: 'With any injection there is a small risk of bruising.'
                },
                {
                    q: 'Is it instant?',
                    a: 'No. It will take 2 week to get the full effects.'
                },
                {
                    q: 'How long does it last?',
                    a: 'A normal time frame is 3-4 months.'
                },
                {
                    q: 'What should I do before treatment?',
                    a: 'Refrain from ibuprofen or asprin (unless persribed by your doctor). Refrain from alcholo for 24 hours prior. Try to attend make-up free.'
                }
            ]
        },
        promo: {
            img: antiwrinkle
        }
    },
    // Dermal Filler
    {
        name: 'Dermal Filler',
        list: [
            {
                id: 7,
                name: '0.5ml',
                cost: 16500,
                time: 30
            },
            {
                id: 8,
                name: '0.7',
                cost: 20000,
                time: 30
            },
            {
                id: 9,
                name: '1ml Lip / Nasolabial',
                cost: 22500,
                time: 30
            },
            {
                id: 10,
                name: '1ml Tear Trough',
                cost: 35000,
                time: 30
            },
            {
                id: 11,
                name: '3ml Package',
                cost: 60000,
                time: 30
            },
            {
                id: 12,
                name: '4ml Package',
                cost: 75000,
                time: 30
            },
            {                
                id: 13,
                name: '5ml Package',
                cost: 85000,
                time: 30
            },
            {
                id: 14,
                name: '6ml Package',
                cost: 90000,
                time: 30
            },
        ],
        info: {
            full: ['Hyaluronic acid dermal fillers are a safe, effective treatment to reduce signs of aging. It can help beautify by lifting, volumising, contouring and hydrating the skin.', 'Here at BIB Clinic we only use premium fillers such as Teosyal  or Juuederm.', 'This is because of the amount of reaserch and quality of products, to ensure you as the patient recieve only the best.', 'The products are safe and create predictable, effective results.', 'Our nurse prescriber has trained in hte UK and abroad with globally renowned doctors.'],
            short: 'Volumise, lift and contour with dermal fillers.',
            questions: [
                {
                    q: 'What is dermal filler?',
                    a: 'Hyaluronic acid is a naturally occuring sugar. Ir is nonpermenate and reversable.'
                },
                {
                    q: 'Is there any downtime?',
                    a: 'It is a minimally invasive procedure. Patients may encounter a little swelling or brusing.'
                },
                {
                    q: 'What is the aftercare?',
                    a: 'Do not apply anything to the treated skin for at least 6 hours. No extream heat (sauna / sunbeds) for 7 days.'
                }
            ]
        },
        promo: {img: filler}
    },
    // HArmony CA
    {
        name: 'HArmony CA',
        list: [
            {
                id: 16,
                name: '1.25ml',
                cost: 30000,
                time: 30
            },
            {
                id: 17,
                name: '2.5ml',
                cost: 60000,
                time: 30
            },
        ],
        info: {
            full: ['full'],
            short: 'Hybrid filler that provides an immediate volumising as well as stimulating collagen regrowth.',
            questions: [
                {
                    q: 'question',
                    a: 'answer'
                }
            ]
        },
        promo: {img: harmony}
    },
    // Skin Boosters
    {
        name: 'Skin Booster',
        list: [
            {
                id: 18,
                name: 'Single Treatment',
                cost: 25000,
                time: 30
            },
            {
                id: 19,
                name: '3 Treatments Course',
                cost: 60000,
                time: 30
            },
        ],
        info: {
            full: ['Profhilo is our skin booster of choice.', 'Profhilo uses high doses of hyaluronic acid, a naturally occuring substance in the body to hydrate firm and improve skin quLITY.', 'It sttimulates new collagen and elsatic, significantly improving the apperance of fine lines and giving you firmer, more glowing skin.', 'It is most commonly used for facial areas, but can be used to rejuvinate the neck, decolltage, arms, kness and hands.'],
            short: 'Improve you skins tone, texture, hydration, and overall radience with Profhilo skin booster injections.',
            questions: [
                {
                    q: 'Who can have this treatment?',
                    a: 'Anyone who shows signs of skin aging'
                },
                {
                    q: 'Will I get lumps?',
                    a: 'Localized lumps are common after the procedure. These usally subside within 4-6 hours but can last for 24 hours.'
                },
                {
                    q: 'How many treatments will i need?',
                    a: '2-3 treatents are recommended 4-6 weeks appart'
                }
            ]
        },
        promo: {img: booster}
    },
    // Skin Care
    {
        name: 'Skin Care',
        list: [
            {
                name: 'Microdermabrasion',
                cost: 4000,
                id:20,
                time: 30,
            },
            {
                name: 'Dermaplaning',
                cost: 4500,
                id: 21,
                time: 30,
            },
            // {
            //     name: 'LUMI EYE',
            //     cost: 15000,
            //     id: 22,
            //     time: 30,
            // },
            {
                name: 'Sclerotherapy',
                cost: 17500,
                id: 23,
                time: 30,
            },
        ],
        info: {
            full: ['full'],
            short: 'Rejuvinate and refresh your skin with clinical skin care.',
            questions: [
                {
                    q: 'question',
                    a: 'answer'
                }
            ]
        },
        promo: {img: care}
    },
    // Skin Peel
    {
        name: 'Skin Peel',
        list: [
            {
                name: 'Dermaceutic Milk Peel',
                cost: 9500,
                id: 24,
                time: 30,
            },
            {
                name: 'Obaji Blue Peel',
                cost: 10000,
                id: 25,
                time: 30,
            },
            {
                name: 'Alumier Glow Peel',
                cost: 12000,
                id: 26,
                time: 30,
            },
            {
                name: 'Dermaceutic TCA',
                cost: 15000,
                id: 27,
                time: 30,
            },
        ],
        info: {
            full: ['full'],
            short: 'Skin peels will leave your skin looking smoother, healthier, plumper and tighter.',
            questions: [
                {
                    q: 'question',
                    a: 'answer'
                }
            ]
        },
        promo: {img: peel}
    },
    // Polynucleotides
    {
        name: 'Polynucleotides',
        list: [
            {
                id: 28,
                name: 'Single Treatment',
                cost: 25000,
                time: 30
            },
            {
                id: 29,
                name: '3 Treatments Course',
                cost: 60000,
                time: 30
            },
        ],
        info: {
            full: ['Polyncleotides are biostimulators. This means they work at a celulat level to kickstart the skin to rejuvinate.', 'They are chains of amino acids that give instructions to the cells and help them repair themselves.', 'They help reduce fine lines, enhance skin tone, restores elasticitty and boosts hydration'],
            short: 'Restore and hydrate your skin by stimulating cell regrowth with Polyucletotide injections',
            questions: [
                {
                    q: 'What areas can be treated?',
                    a: 'The face, neck, decolletage, hands, arms, thighs and stomach.'
                },
                {
                    q: 'How often should i get polynucleotides?',
                    a: 'A courses of 3 treatments are recomended 2-4 weeks apart.'
                },
                {
                    q: 'How long fo results take?',
                    a: 'Around 4-6 weeks after treatment'
                },
                {
                    q: 'Is it painful?',
                    a: 'The level of discomfort varies for each person and location. but many describe it as a pinch or sting.'
                },
                {
                    q: 'Whos RNA is being used?',
                    a: 'The RNA originates from salmon. It undergos highly specialized clinical filtration and an ultra-purification process.'
                }
            ]
        },
        promo: {img: poly}
    },
    // Vitamin
    {
        name: 'Vitamin',
        list: [
            {
                name: 'B12 shot',
                cost: 4500,
                id: 30,
                time: 30,
            },
        ],
        info: {
            full: ['full'],
            short: 'Increase energy levels, improve sleep and overall well being with a Vitamin B12 injection',
            questions: [
                {
                    q: 'question',
                    a: 'answer'
                }
            ]
        },
        promo: {img: null}
    },
    // Hyperhydrosis
    {
        name: 'Hyperhydrosis',
        list: [
            {
                name: 'Female',
                cost: 35000,
                id: 31,
                time: 30,
            },
            {
                name: 'Male',
                cost: 45000,
                id: 32,
                time: 30,
            },
        ],
        info: {
            full: ['full'],
            short: 'Treat hyperhydrosis (excessive sweating) with muscle relaxing injections.',
            questions: [
                {
                    q: 'question',
                    a: 'answer'
                }
            ]
        },
        promo: {img: null}
    },
]

export const getTypeByName = (type) => {
    switch(type.toLowerCase){
        case 'consultation': return types[0]
        case 'antiwrinkle': return types[1]
        case 'dermal filler': return types[2]
        case 'harmony ca': return types[3]
        case 'skin boosters': return types[4]
        case 'skin care': return types[5]
        case 'skin peel': return types[6]
        case 'polynucleotides': return types[7]
        case 'vitamin': return types[8]
        case 'hyperhydrosis': return types[9]
        default: return types[0]
    }
}

export const getTreatmentById = (id) => {
    const treatment = types.filter(type=>type.list.find(treatment=>treatment.id===id)).find(treatment=>treatment.id===id)
    if(treatment)
        return treatment
    else 
        return types[0].list[0]
}