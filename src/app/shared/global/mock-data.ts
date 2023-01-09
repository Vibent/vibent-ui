import { BubbleType } from 'app/shared/models/bubbles/IBubble';
import { Event } from '../../shared/models/event';
import { EventParticipantAnswer } from '../../shared/models/event-participant';
import { Injectable } from '@angular/core';
import { SurveyBubble } from '../../shared/models/bubbles/SurveyBubble';
import { User } from '../../shared/models/user';
import { AlimentationBubble, AlimType } from '../models/bubbles/AlimentationBubble';
import { CheckboxBubble } from '../models/bubbles/CheckboxBubble';
import { FreeBubble } from '../models/bubbles/FreeBubble';
import { PlanningBubble } from '../models/bubbles/PlanningBubble';



@Injectable()
export class MockData {

    public userRef = "3861f9fa-ac82-487c-a923-6b60230c0c2a";
    private userRef2 = "4861f9fa-ac82-487c-a923-6b60230c0c2b";
    private userRef3 = "5861f9fa-ac82-487c-a923-6b60230c0c2c";
    private eventRef = "736c2838-5d79-43a6-9691-47a67b7f5e74";

    public users: User[] = [
        {
            ref: this.userRef,
            email: "clara.smith@no.domain.com",
            firstName: "Clara",
            lastName: "Smith",
            phoneNumber: 12085434383,
            memberships: [],
            participations: [
                {
                    id: 1,
                    userRef: this.userRef,
                    eventRef: this.eventRef,
                    isVisible: true,
                    answer: EventParticipantAnswer.YES,
                }
            ],
            membershipRequests: [],
            socialCredentials: {},
            profilePicLocation: "assets/img/clara-mock-avatar.png",
        },
        {
            ref: this.userRef2,
            email: "john.smith@no.domain.com",
            firstName: "John",
            lastName: "Smith",
            phoneNumber: 12085434383,
            memberships: [],
            participations: [
                {
                    id: 1,
                    userRef: this.userRef2,
                    eventRef: this.eventRef,
                    isVisible: true,
                    answer: EventParticipantAnswer.YES,
                }
            ],
            membershipRequests: [],
            socialCredentials: {},
            profilePicLocation: "assets/img/john-mock-avatar.png",
        },
        {
            ref: this.userRef3,
            email: "adele.smith@no.domain.com",
            firstName: "Adele",
            lastName: "Smith",
            phoneNumber: 12085434383,
            memberships: [],
            participations: [
                {
                    id: 1,
                    userRef: this.userRef3,
                    eventRef: this.eventRef,
                    isVisible: true,
                    answer: EventParticipantAnswer.YES,
                }
            ],
            membershipRequests: [],
            socialCredentials: {},
            profilePicLocation: "assets/img/adele-mock-avatar.png",
        }
    ]

    public planningBubbles: PlanningBubble[] = [
        {
            id: 1,
            creatorRef: this.userRef,
            eventRef: this.eventRef,
            type: BubbleType.PlanningBubble,
            entries: [
                {
                    content: "Meet at the beach next to the floating dock",
                    end: new Date().toISOString(),
                    id: 1,
                    bubbleId: 1,
                    start: new Date().toISOString(),
                    userRef: this.userRef,
                    hasTime: false
                },
                {
                    content: "End the day with a restaurant in town",
                    end: new Date(new Date().setHours(new Date().getHours() + 5)).toISOString(),
                    id: 1,
                    bubbleId: 1,
                    start: new Date(new Date().setHours(new Date().getHours() + 5)).toISOString(),
                    userRef: this.userRef,
                    hasTime: false
                }
            ]
        }
    ];

    public freeBubbles: FreeBubble[] = [
        {
            id: 1,
            creatorRef: this.userRef,
            eventRef: this.eventRef,
            type: BubbleType.FreeBubble,
            content: "Don't forget your bath suit folks 🩲 👙",
            title: "Reminder"
        }
    ];
    
    public surveysBubbles: SurveyBubble[] = [
        {
            id: 1,
            creatorRef: this.userRef,
            eventRef: this.eventRef,
            type: BubbleType.SurveyBubble,
            options: [
                {
                    bubbleId: 1,
                    answers: [
                        {
                            id: 1,
                            optionId: 2,
                            userRef: this.userRef,
                        }
                    ],
                    content: "None",
                    id: 2,
                    userRef: this.userRef,
                },
                {
                    bubbleId: 1,
                    answers: [{
                        id: 1,
                        optionId: 3,
                        userRef: this.userRef2,
                    }],
                    content: "Vegan",
                    id: 3,
                    userRef: this.userRef,
                },
                {
                    bubbleId: 1,
                    answers: [{
                        id: 1,
                        optionId: 4,
                        userRef: this.userRef2,
                    },
                    {
                        id: 2,
                        optionId: 4,
                        userRef: this.userRef3,
                    }],
                    content: "Lactose intolerance",
                    id: 4,
                    userRef: this.userRef,
                },
                {
                    bubbleId: 1,
                    answers: [{
                        id: 1,
                        optionId: 5,
                        userRef: this.userRef3,
                    }],
                    content: "Gluten intolerance",
                    id: 5,
                    userRef: this.userRef,
                }
            ],
            title: "Dietary restrictions?",
            answerCount: 1
        }
    ];

    public alimentationsBubbles: AlimentationBubble[] = [
        {
            id: 1,
            creatorRef: this.userRef,
            eventRef: this.eventRef,
            type: BubbleType.AlimentationBubble,
            entries: [
                {
                    brings: [
                        {
                            id: 1,
                            quantity: 1,
                            userRef: this.userRef2,
                            entryId: 1
                        }
                    ],
                    currentBringing: 1,
                    id: 1,
                    name: 'Apple pie',
                    totalRequested: 1,
                    type: AlimType.FOOD,
                    bubbleId: 1
                },
                {
                    brings: [
                    ],
                    currentBringing: 0,
                    id: 1,
                    name: 'Tiramisu',
                    totalRequested: 1,
                    type: AlimType.FOOD,
                    bubbleId: 1
                },
                {
                    brings: [
                        {
                            id: 1,
                            quantity: 1,
                            userRef: this.userRef3,
                            entryId: 1
                        },
                        {
                            id: 2,
                            quantity: 1,
                            userRef: this.userRef,
                            entryId: 1
                        }
                    ],
                    currentBringing: 2,
                    id: 1,
                    name: 'Soda',
                    totalRequested: 3,
                    type: AlimType.DRINK,
                    bubbleId: 1
                }
            ]

        }
    ];

    public checkboxBubbles: CheckboxBubble[] = [
        {
            id: 1,
            creatorRef: this.userRef,
            eventRef: this.eventRef,
            type: BubbleType.CheckboxBubble, 
            options: [{
                bubbleId: 1,
                answers: [
                    {
                        optionId: 1,
                        id: 1,
                        userRef: this.userRef
                    }
                ],
                content: 'A tablecloth',
                id: 1,
                userRef: this.userRef
            },
            {
                bubbleId: 1,
                answers: [
                ],
                content: 'A parasol',
                id: 2,
                userRef: this.userRef
            },
            {
                bubbleId: 1,
                answers: [
                ],
                content: 'A frisbee',
                id: 3,
                userRef: this.userRef
            }],
            title: 'Stuff we need to bring'
        }
    ];

    public events: Event[] = [
        {
            title: "Cool party at the beach",
            ref: this.eventRef,
            creatorRef: this.userRef,
            description: "Join me for a great party",
            endDate: new Date(),
            startDate: new Date().toISOString(),
            groupRef: "group1",
            participationRefs: [
                {
                    id: 4,
                    userRef: this.userRef,
                    eventRef: this.eventRef,
                    isVisible: true,
                    answer: EventParticipantAnswer.YES
                },
                {
                    id: 5,
                    userRef: this.userRef2,
                    eventRef: this.eventRef,
                    isVisible: true,
                    answer: EventParticipantAnswer.YES
                },
                {
                    id: 6,
                    userRef: this.userRef3,
                    eventRef: this.eventRef,
                    isVisible: true,
                    answer: EventParticipantAnswer.YES
                }
            ],

            alimentationBubbles: this.alimentationsBubbles,
            checkboxBubbles: this.checkboxBubbles,
            freeBubbles: this.freeBubbles,
            locationBubbles: [],
            planningBubbles: this.planningBubbles,
            surveyBubbles: this.surveysBubbles,
            travelBubbles: []
        }
    ];
}
