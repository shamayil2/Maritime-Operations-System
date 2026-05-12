# Maritime Management System: Core Business Flow

This document outlines the operational and business workflows supported by the Maritime Management System backend. The system is designed to digitalize vessel management, replacing traditional paper logs with real-time compliance tracking.

## 1. Fleet & Personnel Onboarding (Admin Flow)
Before any operations can be tracked, the administrative baseline must be established.

* **Ship Registration:** Fleet managers (Admins) register new vessels into the system using their unique IMO (International Maritime Organization) numbers. This acts as the central anchor for all subsequent data.
* **Crew Onboarding:** Admins create accounts for crew members. Each crew member is assigned specific roles (e.g., Captain, Chief Engineer, Deckhand) and is structurally linked to the vessels they are deployed on.

## 2. Maintenance & Task Management (Daily Operations)
Ships require continuous maintenance to remain seaworthy and compliant with international maritime law.

* **Task Creation:** Admins or Captains generate maintenance tasks (e.g., "Main Engine Cylinder Inspection", "Lifeboat Davit Greasing"). Each task includes a due date and priority level.
* **Task Assignment:** Tasks are assigned to specific crew members based on their roles.
* **Execution & Logging:** 
  * Crew members log into their portals to view their daily dockets.
  * As work is performed, crew members update the task status (`Pending` -> `In Progress` -> `Completed`).
  * The system timestamps all status changes to maintain an auditable paper trail.

## 3. Safety & Emergency Preparedness (Drill Flow)
Maritime regulations (like SOLAS) mandate regular emergency drills. The system automates the scheduling and tracking of these events.

* **Drill Scheduling:** Admins schedule fleet-wide or ship-specific safety drills (e.g., *Fire and Evacuation*, *Man Overboard*, *Spill Containment*).
* **Crew Notification:** Crew members see upcoming drills on their dashboards.
* **Attendance & Sign-off:** 
  * Once a drill is executed on the ship, the assigned officer marks the drill as `Completed`.
  * Individual crew members log their participation/attendance. 
  * This prevents "pencil-whipping" (faking records), as individual accounts must digitally sign off on their attendance.

## 4. The Compliance Engine (Automated Auditing)
This is the core value proposition of the software. Instead of manually checking logs to ensure a ship is legally allowed to sail, the system calculates it automatically.

* **Data Aggregation:** The backend continuously monitors the status of all Tasks and Drills associated with a specific Ship.
* **Score Calculation:** 
  * If a ship has 10 scheduled maintenance tasks and 9 are completed on time, its Task Compliance is 90%.
  * If a Fire Drill was scheduled but only 50% of the crew marked their attendance, the Drill Compliance drops significantly.
* **Real-time Status:** The `/compliance/:shipId` endpoint calculates these metrics on the fly. 
* **Business Outcome:** Fleet managers can look at a dashboard and immediately see if a ship is "Green" (Compliant and ready to sail) or "Red" (Non-compliant, risking port detention or fines).

---

## System Actors Summary

| Actor | Capabilities |
| :--- | :--- |
| **Admin / Fleet Manager** | Can add ships, register crew, create tasks, schedule drills, and view fleet-wide compliance scores. |
| **Crew Member** | Can view assigned tasks, update task statuses, and acknowledge drill attendance. Cannot create ships or alter compliance formulas. |

## Lifecycle Example
1. Admin adds *Ship A*.
2. Admin assigns *Crewman Bob* to *Ship A*.
3. Admin creates task *Check Lifeboats* and schedules *Fire Drill*.
4. *Ship A* compliance is currently **Pending/Low**.
5. *Crewman Bob* completes *Check Lifeboats* and attends *Fire Drill*.
6. *Ship A* compliance automatically updates to **100% (Compliant)**.