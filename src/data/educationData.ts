
export interface Institution {
  id: string;
  name: {
    ar: string;
    fr: string;
  };
  specializations: Specialization[];
  eligibleProfiles?: {
    ar: string;
    fr: string;
  };
}

export interface Specialization {
  id: string;
  name: {
    ar: string;
    fr: string;
  };
  description?: {
    ar: string;
    fr: string;
  };
}

export const institutions: Institution[] = [
  {
    id: "medicine",
    name: {
      ar: "كلية الطب",
      fr: "Faculté de Médecine"
    },
    specializations: [
      {
        id: "general-medicine",
        name: {
          ar: "الطب العام",
          fr: "Médecine Générale"
        },
        description: {
          ar: "تخصص الطب العام يؤهل الطلاب ليصبحوا أطباء عامين مع معرفة شاملة في مختلف المجالات الطبية. مدة الدراسة 7 سنوات.",
          fr: "La spécialité de médecine générale forme les étudiants pour devenir des médecins généralistes avec une connaissance complète dans divers domaines médicaux. Durée des études: 7 ans."
        }
      },
      {
        id: "pharmacy",
        name: {
          ar: "الصيدلة",
          fr: "Pharmacie"
        },
        description: {
          ar: "تخصص الصيدلة يعد الطلاب للعمل في مجال تحضير وتوزيع الأدوية. يتضمن برنامج الدراسة مواد في الكيمياء الصيدلانية وعلم الأدوية. مدة الدراسة 6 سنوات.",
          fr: "La pharmacie prépare les étudiants à travailler dans la préparation et la distribution de médicaments. Le programme comprend des cours en chimie pharmaceutique et pharmacologie. Durée des études: 6 ans."
        }
      },
      {
        id: "dentistry",
        name: {
          ar: "طب الأسنان",
          fr: "Dentisterie"
        },
        description: {
          ar: "تخصص طب الأسنان يركز على صحة الفم والأسنان، ويدرس الطلاب تشخيص وعلاج أمراض الفم والأسنان. مدة الدراسة 6 سنوات.",
          fr: "La dentisterie se concentre sur la santé bucco-dentaire, et les étudiants étudient le diagnostic et le traitement des maladies bucco-dentaires. Durée des études: 6 ans."
        }
      }
    ]
  },
  {
    id: "ipgei",
    name: {
      ar: "المعهد التحضيري للمدارس العليا للمهندسين",
      fr: "Institut Préparatoire aux Grandes Écoles d'Ingénieurs (IPGEI)"
    },
    specializations: [
      {
        id: "mp",
        name: {
          ar: "الرياضيات والفيزياء",
          fr: "Mathématiques et Physique"
        }
      },
      {
        id: "se",
        name: {
          ar: "علوم الهندسة",
          fr: "Sciences de l'Ingénierie"
        }
      }
    ],
    eligibleProfiles: {
      ar: "الشعبة الموجه SN + M+ TMGM",
      fr: "Filières orientées SN + M + TMGM"
    }
  },
  {
    id: "isd",
    name: {
      ar: "المعهد العالي للرقمنة",
      fr: "Institut Supérieur du Numérique (ISN)"
    },
    specializations: [
      {
        id: "networks",
        name: {
          ar: "الشبكات",
          fr: "Réseaux"
        }
      },
      {
        id: "web-dev",
        name: {
          ar: "تطوير الويب",
          fr: "Développement Web"
        }
      },
      {
        id: "digital-comm",
        name: {
          ar: "التواصل الرقمي",
          fr: "Communication Numérique"
        }
      }
    ],
    eligibleProfiles: {
      ar: "الشعبة الموجه SN + M",
      fr: "Filières orientées SN + M"
    }
  },
  {
    id: "fst",
    name: {
      ar: "كلية العلوم والتقنيات",
      fr: "Faculté des Sciences et Techniques"
    },
    specializations: [
      {
        id: "bg",
        name: {
          ar: "BG",
          fr: "BG"
        }
      },
      {
        id: "pc",
        name: {
          ar: "PC",
          fr: "PC"
        }
      },
      {
        id: "mpi",
        name: {
          ar: "MPI",
          fr: "MPI"
        }
      }
    ]
  },
  {
    id: "isa",
    name: {
      ar: "المعهد العالي للمحاسبة",
      fr: "Institut Supérieur de Comptabilité"
    },
    specializations: [
      {
        id: "banking-insurance",
        name: {
          ar: "البنوك والتأمين",
          fr: "Banques et Assurances"
        }
      },
      {
        id: "finance-accounting",
        name: {
          ar: "المالية والمحاسبة",
          fr: "Finances et Comptabilité"
        }
      },
      {
        id: "hr-management",
        name: {
          ar: "إدارة الموارد البشرية",
          fr: "Gestion des Ressources Humaines"
        }
      },
      {
        id: "commercial-tech",
        name: {
          ar: "تقنيات التجارة",
          fr: "Techniques Commerciales"
        }
      },
      {
        id: "it-management",
        name: {
          ar: "المعلوماتية والتسيير",
          fr: "Informatique de Gestion"
        }
      }
    ]
  },
  {
    id: "law",
    name: {
      ar: "كلية القانون",
      fr: "Faculté de Droit"
    },
    specializations: []
  },
  {
    id: "economics",
    name: {
      ar: "كلية الإقتصاد",
      fr: "Faculté d'Économie"
    },
    specializations: []
  },
  {
    id: "isie",
    name: {
      ar: "المعهد العالي للهندسة الصناعية",
      fr: "Institut Supérieur d'Ingénierie Industrielle"
    },
    specializations: []
  },
  {
    id: "enesss",
    name: {
      ar: "المدرسة الوطنية العليا لعلوم الصحة",
      fr: "École Nationale Supérieure des Sciences de la Santé (ENESSS)"
    },
    specializations: [
      {
        id: "anesthesia",
        name: {
          ar: "التخدير",
          fr: "Anesthésie"
        }
      },
      {
        id: "nursing",
        name: {
          ar: "علوم التمريض",
          fr: "Sciences Infirmières"
        }
      },
      {
        id: "obstetrics",
        name: {
          ar: "علوم التوليد",
          fr: "Obstétrique"
        }
      },
      {
        id: "medical-therapy",
        name: {
          ar: "العلاج الطبي",
          fr: "Thérapie Médicale"
        }
      },
      {
        id: "medical-imaging",
        name: {
          ar: "التصوير الطبي",
          fr: "Imagerie Médicale"
        }
      }
    ]
  },
  {
    id: "ismz",
    name: {
      ar: "المعهد العالي لمهن المعادن بازويرات",
      fr: "Institut Supérieur des Métiers des Mines à Zouérat"
    },
    specializations: []
  },
  {
    id: "isms",
    name: {
      ar: "المعهد العالي لمهن الإحصاء",
      fr: "Institut Supérieur des Métiers de la Statistique"
    },
    specializations: []
  },
  {
    id: "ismbtp",
    name: {
      ar: "المعهد العالي لمهن البناء والأشغال العمومية",
      fr: "Institut Supérieur des Métiers du Bâtiment et des Travaux Publics"
    },
    specializations: []
  },
  {
    id: "isle",
    name: {
      ar: "المعهد العالي للغة الإنكليزية",
      fr: "Institut Supérieur de la Langue Anglaise"
    },
    specializations: []
  },
  {
    id: "flsh",
    name: {
      ar: "كلية الآداب والعلوم الإنسانية",
      fr: "Faculté des Lettres et Sciences Humaines"
    },
    specializations: []
  },
  {
    id: "istt",
    name: {
      ar: "المعهد العالي للتعليم التكنلوجي في روصو",
      fr: "Institut Supérieur d'Enseignement Technologique de Rosso"
    },
    specializations: []
  },
  {
    id: "isli",
    name: {
      ar: "المعهد العالي للغات والترجمة الفورية بانواذيب",
      fr: "Institut Supérieur des Langues et d'Interprétation de Nouadhibou"
    },
    specializations: []
  },
  {
    id: "usil",
    name: {
      ar: "جامعة العلوم الإسلامية في لعيون",
      fr: "Université des Sciences Islamiques de Laayoune"
    },
    specializations: []
  },
  {
    id: "isjs",
    name: {
      ar: "المعهد العالي للشباب والرياضة",
      fr: "Institut Supérieur de la Jeunesse et des Sports"
    },
    specializations: []
  }
];
