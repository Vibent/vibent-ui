import { BubbleType } from 'app/shared/models/bubbles/IBubble';
import { Event } from '../../shared/models/event';
import { EventParticipantAnswer } from '../../shared/models/event-participant';
import { Injectable } from '@angular/core';
import { SurveyBubble } from '../../shared/models/bubbles/SurveyBubble';
import { User } from '../../shared/models/user';



@Injectable()
export class MockData {

    private userRef = "3861f9fa-ac82-487c-a923-6b60230c0c2a";
    private eventRef = "736c2838-5d79-43a6-9691-47a67b7f5e74";

    public users: User[] = [
        {
            ref: this.userRef,
            email: "john.smith@no.domain.com",
            firstName: "John",
            lastName: "Smith",
            phoneNumber: 12085434383,
            memberships: [],
            participations: [],
            membershipRequests: [],
            socialCredentials: {},
            profilePicLocation: "assets/img/vibent-icon-72.png"
        }
    ]

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
                            optionId: 1,
                            userRef: this.userRef,
                        }
                    ],
                    content: "None",
                    id: 2,
                    userRef: this.userRef,
                }
            ],
            title: "Dietary restrictions?",
            answerCount: 1
        }
    ]

    public events: Event[] = [
        {
            title: "Cool party at the beach",
            ref: this.eventRef,
            creatorRef: this.userRef,
            description: "This is an event for the beach",
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
                }
            ],

            alimentationBubbles: [],
            checkboxBubbles: [],
            freeBubbles: [],
            locationBubbles: [],
            planningBubbles: [],
            surveyBubbles: this.surveysBubbles,
            travelBubbles: []
        }
    ];

}
