const worksMock = [
  {
    "id":1,
    "title":"Siana",
    "tarea":"Other serum reaction due to other serum"
  },
  {
    "id":2,
    "title":"Talbert",
    "tarea":"Transient synovitis, unspecified hip"
  },
  {
    "id":3,
    "title":"Aigneis",
    "tarea":"Burn of unspecified degree of left wrist"
  },
  {
    "id":4,
    "title":"Jerome",
    "tarea":"Perifolliculitis capitis abscedens"
  },
  {
    "id":5,
    "title":"Grantley",
    "tarea":"Choroideremia"
  },
  {
    "id":6,
    "title":"Gus",
    "tarea":"Postprocedural air leak"
  },
  {
    "id":7,
    "title":"Haroun",
    "tarea":"Displaced oblique fracture of shaft of left radius"
  },
  {
    "id":8,
    "title":"Jarrod",
    "tarea":"Idiopathic gout, unspecified knee"
  },
  {
    "id":9,
    "title":"Fern",
    "tarea":"Bitten by duck, sequela"
  },
  {
    "id":10,
    "title":"Emmalynne",
    "tarea":"Crushing injury of right lower leg, sequela"
  },
  {
    "id":11,
    "title":"Renate",
    "tarea":"Unspecified injury of long flexor muscle, fascia and tendon of thumb at wrist and hand level"
  },
  {
    "id":12,
    "title":"Judi",
    "tarea":"Toxic effect of strychnine and its salts, accidental (unintentional), sequela"
  },
  {
    "id":13,
    "title":"Reginald",
    "tarea":"Unspecified injury of muscle(s) and tendon(s) of anterior muscle group at lower leg level"
  },
  {
    "id":14,
    "title":"Sherline",
    "tarea":"Adverse effect of other anti-common-cold drugs, sequela"
  },
  {
    "id":15,
    "title":"Trumaine",
    "tarea":"Other fracture of shaft of unspecified femur, initial encounter for open fracture type IIIA, IIIB, or IIIC"
  },
  {
    "id":16,
    "title":"Devina",
    "tarea":"Laceration of bronchus, unspecified, subsequent encounter"
  },
  {
    "id":17,
    "title":"Tadeas",
    "tarea":"Bent bone of unspecified radius, subsequent encounter for closed fracture with delayed healing"
  },
  {
    "id":18,
    "title":"Perrine",
    "tarea":"Unspecified fracture of fifth metacarpal bone, left hand, subsequent encounter for fracture with delayed healing"
  },
  {
    "id":19,
    "title":"Audrie",
    "tarea":"Effusion, right elbow"
  },
  {
    "id":20,
    "title":"Alaine",
    "tarea":"Dislocation of proximal interphalangeal joint of other finger"
  },
  {
    "id":21,
    "title":"Cassandra",
    "tarea":"Infection of amniotic sac and membranes, unspecified"
  },
  {
    "id":22,
    "title":"Emlynn",
    "tarea":"Stiffness of right foot, not elsewhere classified"
  },
  {
    "id":23,
    "title":"Norton",
    "tarea":"Laceration of blood vessel of left middle finger, initial encounter"
  },
  {
    "id":24,
    "title":"Osborn",
    "tarea":"Laceration without foreign body of left wrist, initial encounter"
  },
  {
    "id":25,
    "title":"Sarge",
    "tarea":"Unspecified car occupant injured in collision with van in nontraffic accident"
  },
  {
    "id":26,
    "title":"Roze",
    "tarea":"Toxic reaction to local anesthesia during pregnancy, first trimester"
  },
  {
    "id":27,
    "title":"Guendolen",
    "tarea":"Inadequate sleep hygiene"
  },
  {
    "id":28,
    "title":"Rip",
    "tarea":"Displaced unspecified condyle fracture of lower end of right femur"
  },
  {
    "id":29,
    "title":"Chicky",
    "tarea":"Unspecified subluxation of right patella, sequela"
  },
  {
    "id":30,
    "title":"Martie",
    "tarea":"Other contact with parrot, initial encounter"
  },
  {
    "id":31,
    "title":"Britte",
    "tarea":"Procedure and treatment not carried out because of contraindication"
  },
  {
    "id":32,
    "title":"Les",
    "tarea":"Person injured in collision between car and two- or three-wheeled powered vehicle (traffic), initial encounter"
  },
  {
    "id":33,
    "title":"Katherine",
    "tarea":"Diabetes mellitus due to underlying condition with mild nonproliferative diabetic retinopathy with macular edema, left eye"
  },
  {
    "id":34,
    "title":"Myrlene",
    "tarea":"Intervertebral disc stenosis of neural canal of cervical region"
  },
  {
    "id":35,
    "title":"Noah",
    "tarea":"Laceration without foreign body of right breast, sequela"
  },
  {
    "id":36,
    "title":"Harwilll",
    "tarea":"Unspecified nonpowered-aircraft accident injuring occupant, sequela"
  },
  {
    "id":37,
    "title":"Olga",
    "tarea":"Displaced spiral fracture of shaft of left femur, subsequent encounter for closed fracture with nonunion"
  },
  {
    "id":38,
    "title":"Dawna",
    "tarea":"Unspecified occupant of other special all-terrain or other off-road motor vehicle injured in traffic accident, initial encounter"
  },
  {
    "id":39,
    "title":"Emmalynn",
    "tarea":"Burn of first degree of unspecified site of right lower limb, except ankle and foot, initial encounter"
  },
  {
    "id":40,
    "title":"Miles",
    "tarea":"Activity, spectator at an event"
  },
  {
    "id":41,
    "title":"Boot",
    "tarea":"Nondisplaced supracondylar fracture with intracondylar extension of lower end of unspecified femur"
  },
  {
    "id":42,
    "title":"Flory",
    "tarea":"Other infective (teno)synovitis, hand"
  },
  {
    "id":43,
    "title":"Husein",
    "tarea":"Poisoning by digestants, assault, sequela"
  },
  {
    "id":44,
    "title":"Brendan",
    "tarea":"Drowning and submersion due to fall off merchant ship, subsequent encounter"
  },
  {
    "id":45,
    "title":"Chev",
    "tarea":"Corrosion of third degree of multiple sites of unspecified ankle and foot"
  },
  {
    "id":46,
    "title":"Pavia",
    "tarea":"Assault by pushing or placing victim in front of other moving object, initial encounter"
  },
  {
    "id":47,
    "title":"Leontine",
    "tarea":"Nondisplaced fracture of sternal end of unspecified clavicle, initial encounter for open fracture"
  },
  {
    "id":48,
    "title":"Horace",
    "tarea":"Other ossification of muscle, unspecified ankle and foot"
  },
  {
    "id":49,
    "title":"Glen",
    "tarea":"Alternating esotropia with V pattern"
  },
  {
    "id":50,
    "title":"Tabitha",
    "tarea":"Nondisplaced spiral fracture of shaft of radius, right arm, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing"
  },
  {
    "id":51,
    "title":"Vance",
    "tarea":"Postprocedural urethral stricture, female"
  },
  {
    "id":52,
    "title":"Lorri",
    "tarea":"Legal intervention involving other gas, bystander injured"
  },
  {
    "id":53,
    "title":"Wakefield",
    "tarea":"Displaced osteochondral fracture of right patella, subsequent encounter for closed fracture with delayed healing"
  },
  {
    "id":54,
    "title":"Janka",
    "tarea":"Other allergy status, other than to drugs and biological substances"
  },
  {
    "id":55,
    "title":"Marnia",
    "tarea":"Unspecified injury of greater saphenous vein at lower leg level, left leg, sequela"
  },
  {
    "id":56,
    "title":"Lindsay",
    "tarea":"Nondisplaced fracture of shaft of unspecified metacarpal bone, sequela"
  },
  {
    "id":57,
    "title":"Neila",
    "tarea":"Other injury of flexor muscle, fascia and tendon of right little finger at wrist and hand level, subsequent encounter"
  },
  {
    "id":58,
    "title":"Stinky",
    "tarea":"Laceration of bronchus, bilateral, subsequent encounter"
  },
  {
    "id":59,
    "title":"Gabe",
    "tarea":"Posterior dislocation of left radial head, initial encounter"
  },
  {
    "id":60,
    "title":"Roxana",
    "tarea":"Diverticular disease of large intestine without perforation or abscess"
  },
  {
    "id":61,
    "title":"Marnie",
    "tarea":"Displaced supracondylar fracture with intracondylar extension of lower end of right femur, subsequent encounter for closed fracture with nonunion"
  },
  {
    "id":62,
    "title":"Margot",
    "tarea":"Other fracture of right talus, initial encounter for open fracture"
  },
  {
    "id":63,
    "title":"Codi",
    "tarea":"Nondisplaced avulsion fracture of tuberosity of right calcaneus, subsequent encounter for fracture with malunion"
  },
  {
    "id":64,
    "title":"Gratia",
    "tarea":"Strain of flexor muscle, fascia and tendon of other and unspecified finger at wrist and hand level"
  },
  {
    "id":65,
    "title":"Rabi",
    "tarea":"Poisoning by unspecified antidepressants, assault"
  },
  {
    "id":66,
    "title":"Humbert",
    "tarea":"Glaucoma secondary to eye inflammation, unspecified eye, stage unspecified"
  },
  {
    "id":67,
    "title":"Skipp",
    "tarea":"Traumatic rupture of unspecified ligament of unspecified finger at metacarpophalangeal and interphalangeal joint, subsequent encounter"
  },
  {
    "id":68,
    "title":"Brennan",
    "tarea":"Infection following other infusion, transfusion and therapeutic injection, subsequent encounter"
  },
  {
    "id":69,
    "title":"Jamil",
    "tarea":"Person injured in unspecified motor-vehicle accident, nontraffic"
  },
  {
    "id":70,
    "title":"Estelle",
    "tarea":"Laceration without foreign body, left hip, initial encounter"
  },
  {
    "id":71,
    "title":"Vinny",
    "tarea":"Other injury due to other accident to other unpowered watercraft, subsequent encounter"
  },
  {
    "id":72,
    "title":"Anatola",
    "tarea":"Colostomy infection"
  },
  {
    "id":73,
    "title":"Keane",
    "tarea":"Poisoning by antimalarials and drugs acting on other blood protozoa, undetermined"
  },
  {
    "id":74,
    "title":"Bobbe",
    "tarea":"Puncture wound with foreign body of left front wall of thorax with penetration into thoracic cavity"
  },
  {
    "id":75,
    "title":"Gratiana",
    "tarea":"War operations involving explosion of guided missile, civilian, sequela"
  },
  {
    "id":76,
    "title":"Aurore",
    "tarea":"Torus fracture of upper end of unspecified humerus, subsequent encounter for fracture with malunion"
  },
  {
    "id":77,
    "title":"Chelsey",
    "tarea":"Arthritis due to other bacteria, right elbow"
  },
  {
    "id":78,
    "title":"Vassily",
    "tarea":"Laceration without foreign body of left wrist"
  },
  {
    "id":79,
    "title":"Delbert",
    "tarea":"Other subluxation of left patella, subsequent encounter"
  },
  {
    "id":80,
    "title":"Flori",
    "tarea":"Other complications of gastric band procedure"
  },
  {
    "id":81,
    "title":"Tabitha",
    "tarea":"Rheumatoid arthritis without rheumatoid factor, unspecified ankle and foot"
  },
  {
    "id":82,
    "title":"Aharon",
    "tarea":"Jumping or diving into natural body of water striking bottom causing other injury"
  },
  {
    "id":83,
    "title":"Kelvin",
    "tarea":"Unspecified chronic otitis externa, unspecified ear"
  },
  {
    "id":84,
    "title":"Lise",
    "tarea":"Burn of second degree of multiple left fingers (nail), including thumb, subsequent encounter"
  },
  {
    "id":85,
    "title":"Isahella",
    "tarea":"Streptococcus pneumoniae as the cause of diseases classified elsewhere"
  },
  {
    "id":86,
    "title":"Jemie",
    "tarea":"Exposure to other natural radiation, subsequent encounter"
  },
  {
    "id":87,
    "title":"Trevor",
    "tarea":"Other sequelae of nontraumatic subarachnoid hemorrhage"
  },
  {
    "id":88,
    "title":"Bibbye",
    "tarea":"Poisoning by hemostatic drug, accidental (unintentional), initial encounter"
  },
  {
    "id":89,
    "title":"Etti",
    "tarea":"Foreign body in conjunctival sac, left eye, subsequent encounter"
  },
  {
    "id":90,
    "title":"Rowe",
    "tarea":"Other physeal fracture of lower end of left fibula, subsequent encounter for fracture with malunion"
  },
  {
    "id":91,
    "title":"Wyatan",
    "tarea":"Displaced osteochondral fracture of right patella, subsequent encounter for open fracture type I or II with delayed healing"
  },
  {
    "id":92,
    "title":"Marlow",
    "tarea":"Toxic effect of unspecified snake venom, undetermined, initial encounter"
  },
  {
    "id":93,
    "title":"Korella",
    "tarea":"Periprosthetic fracture around internal prosthetic ankle joint"
  },
  {
    "id":94,
    "title":"Corrine",
    "tarea":"Deficient foreskin"
  },
  {
    "id":95,
    "title":"Corny",
    "tarea":"Military operations involving other firearms discharge, civilian, initial encounter"
  },
  {
    "id":96,
    "title":"Ardene",
    "tarea":"Other superficial bite of breast, unspecified breast, initial encounter"
  },
  {
    "id":97,
    "title":"Gaston",
    "tarea":"Displaced spiral fracture of shaft of right femur, subsequent encounter for closed fracture with nonunion"
  },
  {
    "id":98,
    "title":"Cornie",
    "tarea":"Congenital complete absence of lower limb, bilateral"
  },
  {
    "id":99,
    "title":"Buiron",
    "tarea":"Postimmunization arthropathy, unspecified site"
  },
  {
    "id":100,
    "title":"Gayelord",
    "tarea":"Displaced fracture of fifth metatarsal bone, right foot, subsequent encounter for fracture with nonunion"
  },
  {
    "id":101,
    "title":"Malissa",
    "tarea":"Familial chondrocalcinosis, knee"
  },
  {
    "id":102,
    "title":"Cece",
    "tarea":"Lesion of plantar nerve, unspecified lower limb"
  },
  {
    "id":103,
    "title":"Kerry",
    "tarea":"Disorder of tooth development, unspecified"
  },
  {
    "id":104,
    "title":"Clarence",
    "tarea":"Double inlet ventricle"
  },
  {
    "id":105,
    "title":"Norene",
    "tarea":"Other fractures of lower end of unspecified radius, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing"
  },
  {
    "id":106,
    "title":"Marthena",
    "tarea":"Infection following a procedure, initial encounter"
  },
  {
    "id":107,
    "title":"Bathsheba",
    "tarea":"Nonpneumonic Legionnaires' disease [Pontiac fever]"
  },
  {
    "id":108,
    "title":"Lavinia",
    "tarea":"Dislocation of proximal interphalangeal joint of right middle finger"
  },
  {
    "id":109,
    "title":"Bettine",
    "tarea":"Atherosclerosis of autologous vein bypass graft(s) of the extremities with gangrene, right leg"
  },
  {
    "id":110,
    "title":"Miquela",
    "tarea":"Unspecified fracture of right patella, subsequent encounter for closed fracture with malunion"
  },
  {
    "id":111,
    "title":"Camila",
    "tarea":"Complex tear of lateral meniscus, current injury, right knee"
  },
  {
    "id":112,
    "title":"Ruby",
    "tarea":"Drowning and submersion due to other accident to unspecified watercraft"
  },
  {
    "id":113,
    "title":"Chryste",
    "tarea":"Poisoning by aspirin, assault, sequela"
  },
  {
    "id":114,
    "title":"Cher",
    "tarea":"Reiter's disease, left knee"
  },
  {
    "id":115,
    "title":"Waylan",
    "tarea":"Nondisplaced fracture of right tibial tuberosity, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion"
  },
  {
    "id":116,
    "title":"Cristina",
    "tarea":"Spastic ectropion of right upper eyelid"
  },
  {
    "id":117,
    "title":"Yovonnda",
    "tarea":"Nondisplaced associated transverse-posterior fracture of right acetabulum"
  },
  {
    "id":118,
    "title":"Myca",
    "tarea":"Pressure ulcer of unspecified heel, unspecified stage"
  },
  {
    "id":119,
    "title":"Amil",
    "tarea":"Abrasion, right hip"
  },
  {
    "id":120,
    "title":"Tomasina",
    "tarea":"Scleritis with corneal involvement"
  },
  {
    "id":121,
    "title":"Wallace",
    "tarea":"Other cerebral infarction"
  },
  {
    "id":122,
    "title":"Peggi",
    "tarea":"Other exposure to controlled fire, not in building or structure"
  },
  {
    "id":123,
    "title":"Golda",
    "tarea":"Traumatic hemorrhage of left cerebrum with loss of consciousness of unspecified duration, sequela"
  },
  {
    "id":124,
    "title":"Karol",
    "tarea":"Newborn affected by other maternal complications of pregnancy"
  },
  {
    "id":125,
    "title":"Clary",
    "tarea":"Unspecified injury to L4 level of lumbar spinal cord, subsequent encounter"
  },
  {
    "id":126,
    "title":"Sabine",
    "tarea":"Injury of cutaneous sensory nerve at ankle and foot level, left leg"
  },
  {
    "id":127,
    "title":"Stillmann",
    "tarea":"Dislocation of other parts of thorax"
  },
  {
    "id":128,
    "title":"Katina",
    "tarea":"Corrosion of second degree of chest wall, subsequent encounter"
  },
  {
    "id":129,
    "title":"Hilly",
    "tarea":"Displaced fracture of shaft of first metacarpal bone, unspecified hand"
  },
  {
    "id":130,
    "title":"Marinna",
    "tarea":"Displaced fracture of medial malleolus of right tibia, subsequent encounter for closed fracture with routine healing"
  },
  {
    "id":131,
    "title":"Hamish",
    "tarea":"Person boarding or alighting a pedal cycle injured in collision with other pedal cycle, sequela"
  },
  {
    "id":132,
    "title":"Dominique",
    "tarea":"Nondisplaced transverse fracture of shaft of left femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing"
  },
  {
    "id":133,
    "title":"Cobbie",
    "tarea":"Sprain of posterior cruciate ligament of unspecified knee, initial encounter"
  },
  {
    "id":134,
    "title":"Huntington",
    "tarea":"Displacement of urinary electronic stimulator device"
  },
  {
    "id":135,
    "title":"Tiler",
    "tarea":"Other superficial bite of breast, left breast, initial encounter"
  },
  {
    "id":136,
    "title":"Reena",
    "tarea":"Bent bone of unspecified radius, initial encounter for closed fracture"
  },
  {
    "id":137,
    "title":"Fraser",
    "tarea":"Other fracture of left talus, initial encounter for closed fracture"
  },
  {
    "id":138,
    "title":"Krisha",
    "tarea":"Complete oblique atypical femoral fracture, unspecified leg, subsequent encounter for fracture with malunion"
  },
  {
    "id":139,
    "title":"Mariann",
    "tarea":"Puncture wound without foreign body of unspecified part of head, subsequent encounter"
  },
  {
    "id":140,
    "title":"Hilda",
    "tarea":"Otalgia"
  },
  {
    "id":141,
    "title":"Kara-lynn",
    "tarea":"Nondisplaced fracture of distal phalanx of left lesser toe(s), subsequent encounter for fracture with delayed healing"
  },
  {
    "id":142,
    "title":"Barrie",
    "tarea":"Salter-Harris Type I physeal fracture of upper end of tibia"
  },
  {
    "id":143,
    "title":"Janaye",
    "tarea":"Arthropathy following intestinal bypass, right hand"
  },
  {
    "id":144,
    "title":"Izabel",
    "tarea":"Diffuse otitis externa, bilateral"
  },
  {
    "id":145,
    "title":"Kevyn",
    "tarea":"Nondisplaced comminuted fracture of shaft of radius, unspecified arm, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion"
  },
  {
    "id":146,
    "title":"Marcus",
    "tarea":"Unspecified disorder of psychological development"
  },
  {
    "id":147,
    "title":"Tandie",
    "tarea":"Other sprain of right hip, subsequent encounter"
  },
  {
    "id":148,
    "title":"Christan",
    "tarea":"Toxic effect of other seafood, intentional self-harm, initial encounter"
  },
  {
    "id":149,
    "title":"Waite",
    "tarea":"Nondisplaced fracture of medial phalanx of other finger, subsequent encounter for fracture with malunion"
  },
  {
    "id":150,
    "title":"Graehme",
    "tarea":"Other physeal fracture of upper end of radius, right arm, sequela"
  },
  {
    "id":151,
    "title":"Fabian",
    "tarea":"Salter-Harris Type I physeal fracture of lower end of right fibula, sequela"
  },
  {
    "id":152,
    "title":"Audrey",
    "tarea":"Other subluxation of right knee, sequela"
  },
  {
    "id":153,
    "title":"Roobbie",
    "tarea":"Contusion of lower back and pelvis, subsequent encounter"
  },
  {
    "id":154,
    "title":"Mirilla",
    "tarea":"War operations involving chemical weapons and other forms of unconventional warfare, civilian, initial encounter"
  },
  {
    "id":155,
    "title":"Wyndham",
    "tarea":"Monoplegia of upper limb following other cerebrovascular disease"
  },
  {
    "id":156,
    "title":"Brucie",
    "tarea":"Lateral epicondylitis, right elbow"
  },
  {
    "id":157,
    "title":"Husain",
    "tarea":"Benign neoplasm of unspecified ovary"
  },
  {
    "id":158,
    "title":"Inez",
    "tarea":"Unspecified bus occupant injured in collision with other motor vehicles in traffic accident, initial encounter"
  },
  {
    "id":159,
    "title":"Ricki",
    "tarea":"Other viral encephalitis, not elsewhere classified"
  },
  {
    "id":160,
    "title":"Fifine",
    "tarea":"Poisoning by emetics, assault, initial encounter"
  },
  {
    "id":161,
    "title":"Culley",
    "tarea":"Salter-Harris Type IV physeal fracture of lower end of humerus, right arm, initial encounter for closed fracture"
  },
  {
    "id":162,
    "title":"Courtney",
    "tarea":"Pathological fracture, unspecified finger(s), sequela"
  },
  {
    "id":163,
    "title":"Dulcy",
    "tarea":"Enlarged lymph nodes, unspecified"
  },
  {
    "id":164,
    "title":"Noe",
    "tarea":"Unspecified motorcycle rider injured in collision with heavy transport vehicle or bus in traffic accident, sequela"
  },
  {
    "id":165,
    "title":"Si",
    "tarea":"Unspecified Zone III fracture of sacrum, sequela"
  },
  {
    "id":166,
    "title":"Glynnis",
    "tarea":"Basal cell carcinoma of skin, unspecified"
  },
  {
    "id":167,
    "title":"Jo-ann",
    "tarea":"Contusion of right shoulder, sequela"
  },
  {
    "id":168,
    "title":"Lise",
    "tarea":"Unspecified injury of intrinsic muscle, fascia and tendon of other finger at wrist and hand level, subsequent encounter"
  },
  {
    "id":169,
    "title":"Chastity",
    "tarea":"Hydroxyapatite deposition disease, knee"
  },
  {
    "id":170,
    "title":"Joella",
    "tarea":"LeFort fracture"
  },
  {
    "id":171,
    "title":"Carolann",
    "tarea":"Contusion of stomach, subsequent encounter"
  },
  {
    "id":172,
    "title":"Arlin",
    "tarea":"Unspecified physeal fracture of upper end of right fibula, initial encounter for closed fracture"
  },
  {
    "id":173,
    "title":"Allene",
    "tarea":"Synovial hypertrophy, not elsewhere classified, lower leg"
  },
  {
    "id":174,
    "title":"Wrennie",
    "tarea":"Viral pericarditis"
  },
  {
    "id":175,
    "title":"Phillip",
    "tarea":"Other superficial bite of left little finger"
  },
  {
    "id":176,
    "title":"Franny",
    "tarea":"Poisoning by, adverse effect of and underdosing of other antiprotozoal drugs"
  },
  {
    "id":177,
    "title":"Rozalin",
    "tarea":"Nondisplaced fracture of proximal phalanx of unspecified thumb, subsequent encounter for fracture with malunion"
  },
  {
    "id":178,
    "title":"Juanita",
    "tarea":"Injury of nerve root of lumbar and sacral spine"
  },
  {
    "id":179,
    "title":"Cross",
    "tarea":"Strain of intrinsic muscle, fascia and tendon of right thumb at wrist and hand level, subsequent encounter"
  },
  {
    "id":180,
    "title":"Jsandye",
    "tarea":"Displaced supracondylar fracture with intracondylar extension of lower end of left femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion"
  },
  {
    "id":181,
    "title":"Giacomo",
    "tarea":"Driver of three-wheeled motor vehicle injured in collision with pedestrian or animal in nontraffic accident, sequela"
  },
  {
    "id":182,
    "title":"Othello",
    "tarea":"Poisoning by ganglionic blocking drugs, assault, subsequent encounter"
  },
  {
    "id":183,
    "title":"Irvine",
    "tarea":"Spondylolisthesis"
  },
  {
    "id":184,
    "title":"Jamie",
    "tarea":"Subluxation and dislocation of lumbar vertebra"
  },
  {
    "id":185,
    "title":"Clerissa",
    "tarea":"Other fracture of foot, except ankle"
  },
  {
    "id":186,
    "title":"Ibby",
    "tarea":"Jumping or diving into natural body of water striking bottom causing drowning and submersion, initial encounter"
  },
  {
    "id":187,
    "title":"Gusella",
    "tarea":"Nondisplaced fracture of base of fourth metacarpal bone, right hand, sequela"
  },
  {
    "id":188,
    "title":"Ame",
    "tarea":"Pedestrian on foot injured in collision with roller-skater, initial encounter"
  },
  {
    "id":189,
    "title":"Jilly",
    "tarea":"Displaced fracture of greater trochanter of left femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing"
  },
  {
    "id":190,
    "title":"Nickie",
    "tarea":"Displacement of intrauterine contraceptive device"
  },
  {
    "id":191,
    "title":"Torrey",
    "tarea":"Unspecified injury of intrinsic muscle and tendon at ankle and foot level, left foot, initial encounter"
  },
  {
    "id":192,
    "title":"Rip",
    "tarea":"Legal intervention involving other gas, law enforcement official injured, sequela"
  },
  {
    "id":193,
    "title":"Frasco",
    "tarea":"Other fracture of lower end of unspecified tibia, subsequent encounter for closed fracture with routine healing"
  },
  {
    "id":194,
    "title":"Ode",
    "tarea":"Nondisplaced fracture of proximal phalanx of left great toe, subsequent encounter for fracture with malunion"
  },
  {
    "id":195,
    "title":"Ailsun",
    "tarea":"Cataract (lens) fragments in eye following cataract surgery, left eye"
  },
  {
    "id":196,
    "title":"Conway",
    "tarea":"Postcardiotomy syndrome"
  },
  {
    "id":197,
    "title":"Lombard",
    "tarea":"Person on outside of bus injured in collision with car, pick-up truck or van in traffic accident, subsequent encounter"
  },
  {
    "id":198,
    "title":"Son",
    "tarea":"Military operations involving explosion of depth-charge, civilian, initial encounter"
  },
  {
    "id":199,
    "title":"Ximenez",
    "tarea":"Puncture wound without foreign body of left forearm, subsequent encounter"
  },
  {
    "id":200,
    "title":"Valenka",
    "tarea":"Idiopathic gout, left ankle and foot"
  }
]

  module.exports = {worksMock}